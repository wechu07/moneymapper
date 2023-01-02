const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('moneymapper-db', 'user', 'password', {
  dialect: 'sqlite',
  host: './moneymapper.sqlite'
})

module.exports = sequelize