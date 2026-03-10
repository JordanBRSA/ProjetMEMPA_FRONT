const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return playlist.init(sequelize, DataTypes);
}

class playlist extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_playlist: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom_playlist: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    style_musique: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_createur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'id_util'
      }
    }
  }, {
    sequelize,
    tableName: 'playlist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_playlist" },
        ]
      },
      {
        name: "id_createur",
        using: "BTREE",
        fields: [
          { name: "id_createur" },
        ]
      },
    ]
  });
  }
}
