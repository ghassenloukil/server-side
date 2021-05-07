const DataType = require('sequelize/lib/data-types')
module.exports = (sequelize) => {
    return sequelize.define("users", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },  
    username: {
        type: DataType.STRING
      },
      email: {
        type: DataType.STRING
      },
      password: {
        type: DataType.STRING
      }?
      points: {
        type:DataType.INTEGER
      }
    });
  };
