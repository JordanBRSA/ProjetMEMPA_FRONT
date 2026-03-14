const express = require('express');
const router  = express.Router();
const playlistController = require('../controllers/playlists.controller');



router.get('/',       playlistController.getAllPlaylists);
router.get('/search', playlistController.getPlaylistBySearch);
router.get('/:id',    playlistController.getPlaylistById);

router.post('/',   playlistController.createPlaylist);

router.delete('/:id', playlistController.deletePlaylist)

module.exports = router;