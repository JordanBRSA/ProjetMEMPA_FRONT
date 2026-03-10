const express = require('express');
const router  = express.Router();
const playlistController = require('../controllers/playlists.controller');



router.get('/get/',       playlistController.getAllPlaylists);
router.get('/get/:id',    playlistController.getPlaylistById);
router.get('/search', playlistController.getPlaylistBySearch);

router.post('/',   playlistController.createPlaylist);


module.exports = router;