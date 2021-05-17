const DataType = require('sequelize/lib/data-types')
module.exports = (sequelize) => {
    const User = sequelize.define("users", {
    userId: {
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
      },
      points: {
        type: DataType.INTEGER
      }
    });
    User.associate = models => {
      User.hasMany(models.Order, {
        onDelete: "cascade",
        as: 'order'
      });
    }
    return User
  };
