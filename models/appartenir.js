const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return appartenir.init(sequelize, DataTypes);
}

class appartenir extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_play: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'playlist',
        key: 'id_playlist'
      }
    },
    id_mus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'musique',
        key: 'id_mus'
      }
    }
  }, {
    sequelize,
    tableName: 'appartenir',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_play" },
          { name: "id_mus" },
        ]
      },
      {
        name: "id_mus",
        using: "BTREE",
        fields: [
          { name: "id_mus" },
        ]
      },
    ]
  });
  }
}
