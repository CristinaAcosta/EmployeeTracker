const mysql = require('mysql');
const util = require('util');
const inquirer = require("inquirer");
const cTable = require ("console.table");

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

connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });
