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
      }
    });
  };


//   const bcrypt = require("bcrypt");

// module.exports = function(sequelize) {
//     const User = sequelize.define('users', {
//       id: {
//         type: DataType.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//         },  
//       username: {
//           type: DataType.STRING
//         },
//         email: DataType.STRING,
//         password: DataType.STRING,
//     }, {
//         freezeTableName: true,
//         instanceMethods: {
//             generateHash(password) {
//                 return bcrypt.hash(password, bcrypt.genSaltSync(8));
//             },
//             validPassword(password) {
//                 return bcrypt.compare(password, this.password);
//             }
//         }
//     });

//     return User;
// }