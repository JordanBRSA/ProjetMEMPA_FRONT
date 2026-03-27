const express = require('express');
const router  = express.Router();
const playlistController = require('../controllers/playlists.controller');
const jwtVerif = require('../middleware/jwtMiddleware');


//Route pour obtenir toutes les playlists
router.get('/',       playlistController.getAllPlaylists);

//Route pour rechercher une playlist
router.get('/search', playlistController.getPlaylistBySearch);

//Route pour obtenir les informations d'une playlist
router.get('/:id',    playlistController.getPlaylistById);

// La 1er route permet de vérifier si l'utilisateur est connecté. Si oui la seconde route s'executera
router.post('/', jwtVerif.jwtMiddleware,  playlistController.createPlaylist);

// La 1er route permet de vérifier si l'utilisateur est connecté. Si oui la seconde route s'executera
router.delete('/:id', jwtVerif.jwtMiddleware, playlistController.deletePlaylist)

module.exports = router;    