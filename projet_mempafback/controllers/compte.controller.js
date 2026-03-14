const getMusicApp = (req) => req.app.get('musicApp');

// GET /api/playlists/:id/chansons
const seConnecter = async (req, res) => {
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
const creerCompte = async (req, res) => {
    const { utilisateur } = getMusicApp(req).models;
    const { login, mdp } = req.body;

    if (!login || !mdp) {
        return res.status(400).json({ error: 'login mdp requis' });
    }

    try {

        // Créer la musique
        const nouvCompte = await utilisateur.create({'login':'test'});

        res.status(201).json(nouvCompte);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

// DELETE compte ?


module.exports = { seConnecter, creerCompte };