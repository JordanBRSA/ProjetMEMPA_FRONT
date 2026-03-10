const express = require('express');
const router  = express.Router();
const chansonController = require('../controllers/chansons.controller');

router.get('/playlists/:id/chansons',  chansonController.getChansonsbyPlaylist);

router.post('/playlists/:id/chansons', chansonController.addChanson);


module.exports = router;