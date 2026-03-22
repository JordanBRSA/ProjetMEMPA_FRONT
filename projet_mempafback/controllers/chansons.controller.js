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



// POST /api/playlists/:id/chansons
const addChanson = async (req, res) => {
    const { playlist, musique, appartenir, contribution } = getMusicApp(req).models;
    const playlistId = parseInt(req.params.id);
    const { titre, auteur } = req.body;
    const fichier = req.file;
    const userId = req.user.id;

    if (!titre || !auteur || !fichier) {
        return res.status(400).json({ error: 'titre, auteur et fichier requis' });
    }

    try {
        const result = await playlist.findByPk(playlistId);
        if (!result) return res.status(404).json({ error: 'Playlist introuvable' });

        const lien = `http://localhost:3000/musiques/${fichier.filename}`;

        const nouvMusique = await musique.create({ titre, auteur, lien });
        await appartenir.create({ id_play: playlistId, id_mus: nouvMusique.id_mus });

        // Ajoute le contributeur seulement s'il n'existe pas déjà
        await contribution.findOrCreate({
            where: { id_util: userId, id_play: playlistId }
        });

        res.status(201).json(nouvMusique);
    } catch (err) {
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