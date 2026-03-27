const {Op} = require("sequelize");
const getMusicApp = (req) => req.app.get('musicApp');


// GET /api/playlists/:id/chansons
const getChansonsbyPlaylist = async (req, res) => {
    const { playlist, musique } = getMusicApp(req).models;
    const playlistId = parseInt(req.params.id);

    try {
        const result = await playlist.findByPk(playlistId, {
            include: [{ model: musique, as: 'id_mus_musiques' }]
        });
        if (!result) return res.status(404).json({ error: 'Playlist introuvable' });
        res.json(result.id_mus_musiques); // Retourne uniquement les musiques
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};


// GET /api/chansons/:idchanson
const getChansonsbyId = async (req, res) => {
    const { musique } = getMusicApp(req).models;
    const chansonId = parseInt(req.params.idchanson);
    try {
        const result = await musique.findOne({
            where: {
                id_mus: chansonId,
            },
        });

        if (!result) return res.status(404).json({ error: 'Playlist ivable' });
        res.json(result); // Retourne uniquement les musiques
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};


/**
 * permet d'ajouter une chanson
 * @param req la requete envoyée par le front
 * @param res le résultat à envoyer au front
 * @returns {Promise<*>}
 */
// POST /api/playlists/:id/chansons
const addChanson = async (req, res) => {
    const { playlist, musique, appartenir } = getMusicApp(req).models;
    const playlistId = parseInt(req.params.id);
    const {titre, auteur, lien } = req.body;
    const sequelize = getMusicApp(req).sequelize;

    if (!titre || !auteur || !lien) {
        return res.status(400).json({ error: 'titre, auteur et lien requis' });
    }

    try {

        const result = await playlist.findByPk(playlistId);
        if (!result) {
            return res.status(404).json({ error: 'Playlist introuvable' });
        }

        const transaction = await sequelize.transaction();
        try{

            // Créer la musique
            const nouvMusique = await musique.create({titre, auteur, lien },{ transaction });

            // Lier la musique à la playlist via la table Appartenir
            await appartenir.create({ id_play: playlistId, id_mus: nouvMusique.id_mus }, { transaction });

            await transaction.commit();
            res.status(201).json(nouvMusique);
        } catch (err) {
            await transaction.rollback();
            console.error(err);
            res.status(500).json({ error: 'Erreur serveur' });
        }

    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};



const deleteChanson = async (req, res) => {
     const { musique } = getMusicApp(req).models;

     try {
         const result = await musique.destroy({
            where: {
                id_mus: req.params.id,
         }
        });
        if (!result) return res.status(404).json({ error: 'Chanson introuvable' });
         res.status(204).json(result);

     } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
     }
}


module.exports = { getChansonsbyPlaylist, addChanson, getChansonsbyId, deleteChanson };