const getMusicApp = (req) => req.app.get('musicApp');

// GET /api/playlists
const getAllPlaylists = async (req, res) => {
    const { playlist } = getMusicApp(req).models;
    try {
        const playlists = await playlist.findAll();
        res.json(playlists);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

// GET /api/playlists/:id
const getPlaylistById = async (req, res) => {
    const { playlist, musique } = getMusicApp(req).models;
    try {
        const result = await playlist.findByPk(req.params.id, {
            include: [{ model: musique, as: 'id_mus_musiques' }]
        });
        if (!result) return res.status(404).json({ error: 'Playlist introuvable' });
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

// POST /api/playlists
const createPlaylist = async (req, res) => {
    const { playlist } = getMusicApp(req).models;
    const { nom_playlist, style_musique, id_createur } = req.body;

    if (!nom_playlist || !id_createur) {
        return res.status(400).json({ error: 'nom_playlist et id_createur requis' });
    }

    try {
        const result = await playlist.create({ nom_playlist, style_musique, id_createur });
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

module.exports = { getAllPlaylists, getPlaylistById, createPlaylist };