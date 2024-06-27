// config.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_manager_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
