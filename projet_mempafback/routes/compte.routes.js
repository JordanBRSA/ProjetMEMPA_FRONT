const express = require('express');
const router  = express.Router();
const compteController = require('../controllers/compte.controller');
const jwtVerifGuest = require('../middleware/jwtMiddlewareForGuest');

//api/compte/

//Route créer compte si utilisateur non connecté
router.post('/register', jwtVerifGuest.jwtMiddlewareForGuest, compteController.creerCompte);

//On ne peut se connecter que si on est pas connecté
router.post('/login',   jwtVerifGuest.jwtMiddlewareForGuest, compteController.seConnecter);


module.exports = router;