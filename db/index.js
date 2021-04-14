const connection = require('./connection');
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
    'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS Department, role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;'
    );
}




    //createEmployee()
    //removeEmployee()
    //updateEmployee()
    // findAllRoles()
    //createRole()
    //createDepartment()





}

