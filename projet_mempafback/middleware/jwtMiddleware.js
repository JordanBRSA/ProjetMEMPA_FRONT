require('../.env');
const jwt = require("jsonwebtoken");
const router = require("../routes/compte.routes");



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