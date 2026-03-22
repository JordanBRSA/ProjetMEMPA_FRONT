const express = require('express');
const router  = express.Router();
const playlistController = require('../controllers/playlists.controller');
const jwtVerif = require('../middleware/jwtMiddleware');



router.get('/',       playlistController.getAllPlaylists);
router.get('/search', playlistController.getPlaylistBySearch);
router.get('/:id',    playlistController.getPlaylistById);

// La 1er route permet de vérifier si l'utilisateur est connecté. Si oui la seconde route s'executera
router.post('/', jwtVerif.jwtMiddleware,  playlistController.createPlaylist);

// Permet de faire +1 sur le nombre de clique
router.patch('/:id/click', playlistController.incrementClick);

// La 1er route permet de vérifier si l'utilisateur est connecté. Si oui la seconde route s'executera
router.delete('/:id', jwtVerif.jwtMiddleware, playlistController.deletePlaylist)

module.exports = router;    