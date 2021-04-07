'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peixe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Peixe.init({
    nome: DataTypes.STRING,
    especie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Peixe',
  });
  return Peixe;
};