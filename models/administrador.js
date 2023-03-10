const { Sequelize } = require('sequelize');
const sequelizeConfig = require("../config/sequilize")

module.exports = sequelizeConfig.define('administradores', {
  Nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  Senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
