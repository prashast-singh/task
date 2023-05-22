const Sequelize = require('sequelize');

const sequelize  = new Sequelize('book-slot', 'root', '9211', {
    dialect: 'mysql',
    host: 'localhost'
});


module.exports = sequelize