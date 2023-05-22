const Sequelize = require('sequelize');
const sequelize = require('../helper/database');

const Appointment = sequelize.define('appointment', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,},

    name: Sequelize.STRING,

    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    }
});


module.exports = Appointment;