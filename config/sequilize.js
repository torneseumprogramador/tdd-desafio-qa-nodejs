const { Sequelize } = require('sequelize');

let database = "desafioqa"
let usuario = "root"
let senha = "root"
let host = "localhost"

if(process.env.DB_DATABASE) database = process.env.DB_DATABASE
if(process.env.DB_USERNAME) usuario = process.env.DB_USERNAME
if(process.env.DB_PASSWORD) senha = process.env.DB_PASSWORD
if(process.env.DB_HOST) host = process.env.DB_HOST

module.exports = new Sequelize(database, usuario, senha, {
    host: host,
    dialect: 'mysql',
    charset: 'utf8mb4'
});