const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return contribution.init(sequelize, DataTypes);
}

class contribution extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_util: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'utilisateur',
        key: 'id_util'
      }
    },
    id_play: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'playlist',
        key: 'id_playlist'
      }
    }
  }, {
    sequelize,
    tableName: 'contribution',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_util" },
          { name: "id_play" },
        ]
      },
      {
        name: "id_play",
        using: "BTREE",
        fields: [
          { name: "id_play" },
        ]
      },
    ]
  });
  }
}
