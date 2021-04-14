const connection = require('./connection');
const inquirer = require("inquirer");
const cTable = require ("console.table");

// referencing to connection for later use
// we'll use the the class data when we call the functions in index.js in the root
class data {
    constructor(connection) {
        this.connection = connection;
    }

// List of Functions in sql
    //findAllEmployees()
findAllEmployees() {
    return this.connection.query(
    'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS Department, role.salary,  CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;'
    );
}

viewEmployees() {
    return this.connection.query(
    'SELECT SELECT first_name, last_name FROM employees.employee;'
    );
}

viewRoles() {
    return this.connection.query(
    'SELECT title FROM employees.role;'
    );
}

viewDepartment() {
    return this.connection.query(
    'SELECT name FROM employees.department;'
    );
}

    //createEmployee()
    //Create Dept.
    //createRole()
    // View dept.!
    //View roles, !
    // View employees!
    //updateEmployee()
    //update roles 
    // findAllRoles()

}
