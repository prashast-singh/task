const Sequelize = require('sequelize')
const sequelize = require('../helper/database')

const User = sequelize.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,},

    name:{
        type: Sequelize.STRING,
        allowNull: false
    },

    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    password:{
        type: Sequelize.STRING,
        allowNull: false
    },

    premiumUser:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },

    totalExpense:{
        type: Sequelize.DOUBLE,
        defaultValue: 0
    }
    
});

module.exports = User