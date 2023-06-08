const Sequelize = require('sequelize');

const sequelize  = new Sequelize(process.env.DB_NAME,process.env.DB_LOGIN , process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',

    dialectOptions: {
        timezone: 'local'
      }
});


module.exports = sequelize