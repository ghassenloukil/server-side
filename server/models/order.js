const DataType = require('sequelize/lib/data-types')
module.exports = (sequelize) => {
    const Order = sequelize.define("order", {
    orderId: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    user_id:{
      type: DataType.INTEGER,
      foreignKey: true,
      allowNull: false
    },
    parking_id:{
      type: DataType.INTEGER,
      foreignKey: true,
      allowNull: false
    },
      date: {
        type: DataType.STRING
      },
      hour: {
        type: DataType.STRING
      }
    });
    Order.associate = models => {
        Order.belongsTo(models.User,models.Park, {
            foreignKey:{
                allowNull: false
            }
        })
    }
    return Order
  };