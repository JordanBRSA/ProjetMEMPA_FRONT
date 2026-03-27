const express = require('express');
const router  = express.Router();
const chansonController = require('../controllers/chansons.controller');
const jwtVerif = require('../middleware/jwtMiddleware');


//Route pour obtenir les chansons pour une playlist
router.get('/playlists/:id/chansons',  chansonController.getChansonsbyPlaylist);

//Route pour obtenir les informations d'une chanson
router.get('/chansons/:idchanson',  chansonController.getChansonsbyId);

//Verifie si l'utilisateur est connecté puis ajoute une chanson
router.post('/playlists/:id/chansons', jwtVerif.jwtMiddleware, chansonController.addChanson);

// La 1er route permet de vérifier si l'utilisateur est connecté pour faire ça
router.delete('/chansons/:id', jwtVerif.jwtMiddleware, chansonController.deleteChanson);

module.exports = router;