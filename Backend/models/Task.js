// models/Task.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'In Progress', 'Completed'),
    defaultValue: 'Pending',
  },
  dueDate: {
    type: DataTypes.DATE,
  },
});

module.exports = Task;
