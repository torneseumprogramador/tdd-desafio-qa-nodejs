const sequelize = require("../config/sequilize")

module.exports = sequelize.define('administradores', {
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

