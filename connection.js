const mysql = require("mysql");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"evoting"
});
module.exports = con;