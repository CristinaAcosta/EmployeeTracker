const connection = require('./connection');
const inquirer = require("inquirer");
const cTable = require ("console.table");

// referencing to connection for later use
// we'll use the the class data when we call the functions in index.js in the root
class data {
    constructor(connection) {
        this.connection = connection;
    }
  }
// Ask to get all employees  
function search() {
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

// Find roles
viewRoles() 
    return this.connection.query(
    'SELECT title FROM employees.role;'
    );

//Find department 
viewDepartment() 
    return this.connection.query(
    'SELECT name FROM employees.department;'
    );

// Create employee, role, and dept 
function addEmployees() {
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
        var newDept = " "
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
    // Update employee and roles 
    function updateEmpRole() {
        return this.connection.query('SELECT employee.id, employee.first_name, employee.last_name, department.dept_name, employee.roles_id, roles.title FROM employee INNER JOIN roles ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.dept_name;'
        
        )}

        inquirer
          .prompt([
            {
              name: "choice",
              type: "rawlist",
              message: "Which role would you like to update?",
              choices: function() {
                let choiceArray = [];
                  for (let i=1; i < results.length; i++) {
                  let emp = ""; 
                  emp = `${results[i].id} ${results[i].first_name} ${results[i].last_name} ${results[i].dept_name} ${results[i].roles_id} ${results[i].title}`
                  choiceArray.push(emp)
                }
              return choiceArray;
              }
            },
            {
              name: "employeeUpdate",
              type: "list",
              message: "What role would you like to update this employee to?",
              choices: ['Accountant', 'Data Scientist', 'Social Media', 'HR Representative']
            }
          ])
          .then(function(answer) {
          updateToChosenRole(answer);
          return answer;
          })
          
      function updateToChosenRole(answer) {
        newRoleId = "";
        newDept = "";
        newMgr = "";
    
        if (answer.roleUpdate === 'Accountant') {
          newRoleId = 1;
          newDept = 'Finance';
          newMgr = 'John Stripe';
        }
        if (answer.roleUpdate === 'Data Scientist') {
         newRoleId = 2;
         newDept = 'Marketing';
         newMgr = 'Samantha Jones';
        }
        if (answer.roleUpdate === 'Social Media') {
         newRoleId = 2;
         newDept = 'Marketing';
         newMgr = 'Samantha Jones';
        }
        if (answer.roleUpdate === 'HR Representative') {
         newRoleId = 3;
         newDept = 'Human Resource';
         newMgr = 'Terry Cast';
        }
    
        
        connection.query(
          "UPDATE employee SET WHERE ",
          [
            {
              role_id: newRoleId,
              dept_name: newDept, 
              manager_name: newMgr
            },
            {
              id: parseInt(choiceStr[0])
            }
          ],
         
        )
      };

