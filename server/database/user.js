const Sequelize = require('sequelize')
const user = require('../models/user')


const config = require('./config')


const sequelize = new Sequelize( config.DATABASE_NAME, config.USERNAME, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT,
    dialectOptions: {connectTimeout: 1000}
})

const Users = user(sequelize, Sequelize)
console.log("hello from user",Users);



sequelize.sync({ force: false}).then(() => {
    console.log('your table users is there');
})

module.exports = Users
