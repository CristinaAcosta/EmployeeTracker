const connection = require('./connection');
const inquirer = require("inquirer");
const cTable = require ("console.table");

// referencing to connection for later use
// we'll use the the class data when we call the functions in index.js in the root
class data {
    constructor(connection) {
        this.connection = connection;
    }
    
function search(){
    inquirer 
    .prompt({
        name:"task",
        type: "list",
        message: "What would you like to select.",
        Choices: [ "View all employees.","Create new employee.", "Create new department.", "Create new role.", "View departments.", "View roles.", "View employees.","Update employee role.", "Update employee status."]
    })
.then(function(answer){
    switch (answer.task) {
        case "View all employees.":
            findAllEmployees();
            break;

            case "View departments.":
                viewDepartment();
                break; 

            case "View roles.":
                viewRoles();
                break;

            case "View employees.":
                 viewEmployees();
                 break;
    }
});
}
// List of Functions in sql
    //findAllEmployees()
findAllEmployees() 
    return this.connection.query(
    'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS Department, role.salary,  CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;'
    );


viewEmployees() 
    return this.connection.query(
    'SELECT SELECT first_name, last_name FROM employees.employee;'
    );


viewRoles() 
    return this.connection.query(
    'SELECT title FROM employees.role;'
    );


viewDepartment() 
    return this.connection.query(
    'SELECT name FROM employees.department;'
    );

function addEmployees(){
    inquirer
    .prompt([
        {
            name:empFirstName,
            type: "input",
            message: "What is the new employees first name?"
        },
        {
            name:empLastName,
            type: "input",
            message: "What is the new employees last name?"
        },
        {
            name:empDept,
            type: "input",
            message: "What is the new employees department name?",
            choices: ['Finance', 'Marketing', 'Human Resource']
        },
        {
            name:empSalary,
            type: "input",
            message: "What is the new employees salary?"
        },
        {
            name:empManager,
            type: "input",
            message: "Who is the new employees manager?",
            choices: ['John Stripes', 'Samantha Jones', 'Terry Cast']
        },
        {
            name:empRole,
            type: "input",
            message: "What is the new employees role?",
            choices:['Accountant','Data Scientist', 'Marketing', 'HR Representative']
        }
    ])
    .then(function(answer){
        var newDept = ""
        if (answer.newDept === "Finance") {
          newDept = 1;
        }
        if (answer.newDept === "Marketing") {
            newDept = 2;
          }
        if (answer.newDept === "Human Resource") {
            newDept = 3;
          }
        var newRole = ""
          if (answer.newRole === "Accountant") {
            newRole = 1;
          }
          if (answer.newRole === "Data Scientist") {
            newRole = 2;
          }
          if (answer.newRole === "Social Media") {
            newRole = 3;
          }
          if (answer.newRole === "HR Representative") {
            newRole = 4;
          }

          var query = connection.query(
              "INSERT INTO employee SET",
             {
                first_name: answer.empFirstName,
                last_name: answer.empLastName,
                dept_name: answer.empDept,
                salary: answer.empSalary,
                roles_id: answer.empRole,
                manager_name: answer.empManager
             } 
          )
    })
}
    //createEmployee()
    //Create Dept.
    //createRole()
    //updateEmployee()
    //update roles 


