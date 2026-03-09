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

// POST /api/playlists/:id/chansons
const addChanson = async (req, res) => {
    const { playlist, musique, appartenir } = getMusicApp(req).models;
    const playlistId = parseInt(req.params.id);
    const { id_mus, titre, auteur, lien } = req.body;

    if (!titre || !auteur || !lien || !id_mus) {
        return res.status(400).json({ error: 'id_mus, titre, auteur et lien requis' });
    }

    try {
        const result = await playlist.findByPk(playlistId);
        if (!result) return res.status(404).json({ error: 'Playlist introuvable' });

        // Créer la musique
        const nouvMusique = await musique.create({ id_mus, titre, auteur, lien });

        // Lier la musique à la playlist via la table Appartenir
        await appartenir.create({ id_play: playlistId, id_mus: nouvMusique.id_mus });

        res.status(201).json(nouvMusique);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

module.exports = { getChansonsbyPlaylist, addChanson };