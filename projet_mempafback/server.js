var express  = require('express');
const cors   = require('cors');
const MusicApp = require('./db');

var app= express();
const musicApp = new MusicApp();

app.set('musicApp', musicApp);

app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

const chansonRoutes  = require('./routes/chansons.routes');
const playlistRoutes = require('./routes/playlists.routes');

app.use('/api',           chansonRoutes);
app.use('/api/playlists', playlistRoutes);

app.listen(3000, () => {
    console.log(`Serveur démarré sur http://localhost:3000`);
});