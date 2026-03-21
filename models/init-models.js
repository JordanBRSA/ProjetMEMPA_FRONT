const DataTypes = require("sequelize").DataTypes;
const _appartenir = require("./appartenir");
const _contribution = require("./contribution");
const _musique = require("./musique");
const _playlist = require("./playlist");
const _utilisateur = require("./utilisateur");

function initModels(sequelize) {
  const appartenir = _appartenir(sequelize, DataTypes);
  const contribution = _contribution(sequelize, DataTypes);
  const musique = _musique(sequelize, DataTypes);
  const playlist = _playlist(sequelize, DataTypes);
  const utilisateur = _utilisateur(sequelize, DataTypes);

  musique.belongsToMany(playlist, { as: 'id_play_playlists', through: appartenir, foreignKey: "id_mus", otherKey: "id_play" });
  playlist.belongsToMany(musique, { as: 'id_mus_musiques', through: appartenir, foreignKey: "id_play", otherKey: "id_mus" });
  playlist.belongsToMany(utilisateur, { as: 'id_util_utilisateurs', through: contribution, foreignKey: "id_play", otherKey: "id_util" });
  utilisateur.belongsToMany(playlist, { as: 'id_play_playlist_contributions', through: contribution, foreignKey: "id_util", otherKey: "id_play" });
  appartenir.belongsTo(musique, { as: "id_mus_musique", foreignKey: "id_mus"});
  musique.hasMany(appartenir, { as: "appartenirs", foreignKey: "id_mus"});
  appartenir.belongsTo(playlist, { as: "id_play_playlist", foreignKey: "id_play"});
  playlist.hasMany(appartenir, { as: "appartenirs", foreignKey: "id_play"});
  contribution.belongsTo(playlist, { as: "id_play_playlist", foreignKey: "id_play"});
  playlist.hasMany(contribution, { as: "contributions", foreignKey: "id_play"});
  contribution.belongsTo(utilisateur, { as: "id_util_utilisateur", foreignKey: "id_util"});
  utilisateur.hasMany(contribution, { as: "contributions", foreignKey: "id_util"});
  playlist.belongsTo(utilisateur, { as: "id_createur_utilisateur", foreignKey: "id_createur"});
  utilisateur.hasMany(playlist, { as: "playlists", foreignKey: "id_createur"});

  return {
    appartenir,
    contribution,
    musique,
    playlist,
    utilisateur,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
