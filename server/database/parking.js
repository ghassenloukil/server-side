const Sequelize = require('sequelize')
const parking = require('../models/parking')

const config = require('./config')


const sequelize = new Sequelize( config.DATABASE_NAME, config.USERNAME, config.PASSWORD, {
    host: config.HOST,
    dialect: config.DIALECT,
    dialectOptions: {connectTimeout: 1000}
})


const Parkings = parking(sequelize, Sequelize)
console.log("hello from parking",Parkings);

sequelize.sync({ force: false}).then(() => {
    console.log('your table Parkings is there');
})

module.exports = Parkings