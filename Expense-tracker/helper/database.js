const Sequelize = require('sequelize');

const sequelize  = new Sequelize('expense-app', 'root', '9211', {
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = sequelize