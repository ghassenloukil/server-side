const Sequelize = require('sequelize'); 
const db = {}
const env = require('../database/config');
const sequelize = new Sequelize(env.DATABASE_NAME, env.USERNAME, env.PASSWORD, {
  host: env.HOST,
//   port: env.DATABASE_PORT,
  dialect: env.DIALECT,
  define: {
    underscored: true
  }
});
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.order = require( "./order")(sequelize, Sequelize)
db.parking = require ("./parking")(sequelize, Sequelize)
db.user = require ("./user")(sequelize, Sequelize)

db.user.hasMany(db.order);
db.order.belongsTo(db.user);
db.parking.hasMany(db.order);
db.order.belongsTo(db.parking);

module.export = db