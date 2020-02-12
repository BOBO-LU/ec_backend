// DataBase
const config = require('../config/development_config');
const mysqlt = require("mysql");

const connection = mysqlt.createConnection({
  host: config.mysql.host,//'localhost',
  user: 'test',//config.mysql.user,
  password: '1234',//config.mysql.password,
  database: 'shopping_cart'//config.mysql.database
});
console.log('connection_db');
connection.connect(err => {
  if (err) {
    console.log('123connecting error');
    console.log('connectionDB.js')
  } else {
    console.log('connecting success');
    console.log('testconnectionsuccess');
  }
});

module.exports = connection;