const { Sequelize, DataTypes, Model } = require('sequelize')

const Pledge = sequelize.define('Pledge', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
});

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pledge_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mpesa_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mpesa_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mpesa_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

Pledge.hasMany(Payment, { foreignKey: 'pledge_id' })
Payment.belongsTo(Pledge, { foreignKey: 'pledge_id' })

module.exports = { Pledge, Payment}