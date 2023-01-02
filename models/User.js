const { Sequelize, DataTypes, Model } = require('sequelize')
// const sequelize = new Sequelize('sqlite::memory:')
const sequelize = require('../config/db')

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
}, {
  // Other model options go here
});

module.exports = User