const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return utilisateur.init(sequelize, DataTypes);
}

class utilisateur extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_util: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom_util: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mot_de_passe: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'utilisateur',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_util" },
        ]
      },
    ]
  });
  }
}
