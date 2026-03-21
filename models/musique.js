const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return musique.init(sequelize, DataTypes);
}

class musique extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_mus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    auteur: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lien: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'musique',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_mus" },
        ]
      },
    ]
  });
  }
}
