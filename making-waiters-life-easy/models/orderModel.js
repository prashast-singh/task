const Sequelize = require('sequelize');
const sequelize = require('../helper/database');

const Order = sequelize.define('order', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,},

    amount: Sequelize.DOUBLE,

    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    table: {
      type: Sequelize.STRING,
      allowNull: false
    }
});


module.exports = Order;