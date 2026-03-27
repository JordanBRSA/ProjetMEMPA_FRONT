require('../.env');
const jwt = require("jsonwebtoken");
const router = require("../routes/compte.routes");


/**
 * Permet de vérifier si l'utilisateur est connecté (à un jwtoken valide)
 * @param req la requete de l'utilisateur
 * @param res le résultat à renvoyer au front end
 * @param next La prochaine action à effectuer dans les routes
 * @returns {*}
 */
const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).send('Accès refusé. Token non fourni.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
    next();
  } catch (exception) {
    res.status(400).send('Token non valide.');
  }
};

module.exports = { jwtMiddleware };