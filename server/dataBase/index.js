var mysql = require('mysql');
var mysqlConfig = require('./config.js')

var connection = mysql.createConnection(mysqlConfig)

const getAllUsers = (req, res) => {
    connection.query("SELECT * FROM user", (err, response) => {
        if(err) {
            console.log(err);
        }else {
            res.send(res)
        }
    })
}

module.exports = getAllUsers