const { Sequelize } = require('sequelize');

module.exports = new Sequelize('desafioqa', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});
