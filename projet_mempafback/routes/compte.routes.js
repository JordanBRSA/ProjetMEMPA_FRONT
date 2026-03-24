const express = require('express');
const router  = express.Router();
const compteController = require('../controllers/compte.controller');
const jwtVerifGuest = require('../middleware/jwtMiddlewareForGuest');

//api/compte/

router.post('/register', jwtVerifGuest.jwtMiddlewareForGuest, compteController.creerCompte);

//On ne peut se connecter que si on est pas connecté
router.post('/login',   jwtVerifGuest.jwtMiddlewareForGuest, compteController.seConnecter);

//router.delete('/:id', compte.deletePlaylist)

module.exports = router;