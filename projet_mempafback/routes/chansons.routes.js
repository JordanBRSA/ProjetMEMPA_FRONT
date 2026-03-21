const express = require('express');
const router  = express.Router();
const chansonController = require('../controllers/chansons.controller');
const jwtVerif = require('../middleware/jwtMiddleware');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/musiques/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.get('/playlists/:id/chansons', chansonController.getChansonsbyPlaylist);
router.get('/chansons/:idchanson', chansonController.getChansonsbyId);
router.post('/playlists/:id/chansons', jwtVerif.jwtMiddleware, upload.single('fichier'), chansonController.addChanson);
router.delete('/chansons/:id', jwtVerif.jwtMiddleware, chansonController.deleteChanson);

module.exports = router;