require('../.env');

const {Op} = require("sequelize");
const getMusicApp = (req) => req.app.get('musicApp');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


// POST /api/login
const seConnecter = async (req, res) => {
    const { utilisateur } = getMusicApp(req).models;

    const { login, pass } = req.body;

    if(!login || !pass || !utilisateur) {
        return res.status(400).json({ error: 'login or mdp not found' });
    }

    try{
        const result = await utilisateur.findOne({
            where: {
                nom_util:  login ,
                mot_de_passe: pass

            }
        });
        if(!(result)){
            return res.status(403).json({ error: 'login or mdp not found' });
        }


    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }

    const token = jwt.sign({login}, process.env.JWT_TOKEN, {expiresIn: '1d'});

    res.status(200).json({token});


};

// POST /api/register
const creerCompte = async (req, res) => {
    const { utilisateur } = getMusicApp(req).models;
    const { login, pass } = req.body ?? {};

    if (!login || !pass) {
        return res.status(400).json({ error: 'login mdp requis' });
    }

    try {

        // Créer la musique
        const nouvCompte = await utilisateur.create({'nom_util':login, 'mot_de_passe':pass});
        const token = jwt.sign({login}, process.env.JWT_TOKEN, {expiresIn: '1d'});

        res.status(201).json(token);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

module.exports = { seConnecter, creerCompte};