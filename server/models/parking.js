const DataType = require('sequelize/lib/data-types')
module.exports = (sequelize) => {
    const Park = sequelize.define("parkings", {
    parkingId: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },  
    parkname: {
        type: DataType.STRING
      },
      // date: {
      //   type: DataType.STRING
      // },
      // hour: {
      //   type: DataType.STRING
      // },
      totalPlaces: {
        type: DataType.INTEGER
      },
      emptyPlaces: {
        type: DataType.INTEGER
      },
    price: {
        type: DataType.DECIMAL(10, 4)
      },
    long: {
        type: DataType.DECIMAL(10, 4)
      },
    latit: {
        type: DataType.DECIMAL(10, 4)
      }
    });
    return Park
  };
