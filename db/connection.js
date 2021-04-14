const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'employees'
});

// calling connection 
// using util for asyn/ await and using promises
connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;