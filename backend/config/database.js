// config/database.js
const { Sequelize } = require('sequelize');

// Set up a connection to the MySQL database
const sequelize = new Sequelize('venky469', 'root', 'Venky@1234', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;
