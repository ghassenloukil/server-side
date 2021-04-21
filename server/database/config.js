

module.exports = {

  host: "localhost",
  user: "root",
  password: "f48r3g4570!v*",
  db: "parki",

  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};