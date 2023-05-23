const Sequelize = require('sequelize');
const sequelize = require('../helper/database');

const Expense = sequelize.define('expense', {
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
    category: {
      type: Sequelize.STRING,
      allowNull: false
    }
});


module.exports = Expense;