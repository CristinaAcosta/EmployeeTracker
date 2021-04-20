const connection = require('./connection');
const inquirer = require("inquirer");
const fs = require('fs');
require("console.table");



// referencing to connection for later use
// we'll use the the class data when we call the functions in index.js in the root
class data {
  constructor(connection) {
    this.connection = connection;
  }

// prompt, switch, cases
// each case is connected with a js function 
// each js function is connected with a mysql direction/ language 
// two sections, one the vaniall js function and another the mysql function



// List of Functions in sql
//findAllEmployees()
findAllEmployees() {
  return this.connection.query(
  'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS Department, role.salary,  CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;'
);
}


// Find roles
findRoles() {
  return this.connection.query(
  'SELECT title FROM employees.role;'
);
}

//Find department 
findDepartments() {
  return this.connection.query(
  'SELECT name FROM employees.department;'
);
}

};
 
// Update employee and roles 
 //updateEmpRole() {
 // return this.connection.query('SELECT employee.id, employee.first_name, employee.last_name, department.dept_name, employee.roles_id, roles.title FROM employee INNER JOIN roles ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.dept_name;'

module.exports = new data(connection)