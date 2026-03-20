const express = require('express');
const router  = express.Router();
const chansonController = require('../controllers/chansons.controller');
const jwtVerif = require('../middleware/jwtMiddleware');


router.get('/playlists/:id/chansons',  chansonController.getChansonsbyPlaylist);
router.get('/chansons/:idchanson',  chansonController.getChansonsbyId);

router.post('/playlists/:id/chansons', chansonController.addChanson);


// La 1er route permet de vérifier si l'utilisateur est connecté pour faire ça
router.delete('/chansons/:id', jwtVerif.jwtMiddleware, chansonController.deleteChanson);

module.exports = router;