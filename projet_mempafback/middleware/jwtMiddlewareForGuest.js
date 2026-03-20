require('../.env');
const jwt = require("jsonwebtoken");
const router = require("../routes/compte.routes");


/**
 * Permet de vérifier si l'utilisateur est connecté. Oui, erreur. Non on permet de continuer.
 * (utilisé pour empecher la création de compte pour les utilisateurs déjà connecté par exemple)
 * @param req   la requete provenant du client
 * @param res
 * @param next  La prochaine action à effectuer dans les routes
 */
const jwtMiddlewareForGuest = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    /**
     * Si pas de token, utilisateur non connecté. On autorise l'action
     */
    if (!token)
    {
        next();
    }
    else
    {
        try {
            const decoded = jwt.verify(token, process.env.JWT_TOKEN);
            return res.status(403).json({ message: 'Vous êtes déjà connecté.' });
        } catch (exception) {
            next();
        }
    }

};

module.exports = { jwtMiddlewareForGuest };