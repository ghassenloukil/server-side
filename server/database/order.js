const Sequelize = require('sequelize')
const order = require('../models/orders')

const config = require('./config')


const sequelize = new Sequelize( config.DATABASE_NAME, config.USERNAME, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT,
    dialectOptions: {connectTimeout: 1000}
})


const Orders = order(sequelize, Sequelize)
console.log("hello from order",Orders);

sequelize.sync({ force: false}).then(() => {
    console.log('your table users is there');
})

module.exports = Orders