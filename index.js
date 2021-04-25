const connection = require("./db/connection.js");
const db = require("./db");
require("console.table")

// this would have your switch cases & vanilla js 
// Ask to get all employees


//Create(add)new role

function search() {
    inquirer
      .prompt({
        name: "task",
        type: "list",
        message: "What would you like to select.",
        Choices: ["View all employees.", "Create new employee.", "Create new department.", "Create new role.", "View departments.", "View roles.", "View employees.", "Update employee role.", "Update employee status."]
      })
      .then(function (answer) {
    // Views all employees
        switch (answer.task) {
          case "View all employees.":
            return viewEmployees();
        //View departments
          case "View departments.":
            return viewDepartments();
        // View roles 
          case "View roles.":
            return viewRoles();
        // Creates(adds)new employees
          case "Create new employee.":
            return addEmployees();
        //Updates employees
          case "Update employees.":
              return updates();
            // add more cases 
          default:
            return quit();
        }
      });
  }
// Create employee, role, and dept 
function addEmployees() {
    inquirer
      .prompt([
        {
          name: empFirstName,
          type: "input",
          message: "What is the new employees first name?"
        },
        {
          name: empLastName,
          type: "input",
          message: "What is the new employees last name?"
        },
        {
          name: empDept,
          type: "input",
          message: "What is the new employees department name?",
          choices: ['Finance', 'Marketing', 'Human Resource']
        },
        {
          name: empSalary,
          type: "input",
          message: "What is the new employees salary?"
        },
        {
          name: empManager,
          type: "input",
          message: "Who is the new employees manager?",
          choices: ['John Stripes', 'Samantha Jones', 'Terry Cast']
        },
        {
          name: empRole,
          type: "input",
          message: "What is the new employees role?",
          choices: ['Accountant', 'Data Scientist', 'Marketing', 'HR Representative']
        }
      ])
      .then(function(answer) {
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
  
        connection.query(
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

  // wrap inside a function so it can be called within the switch case
function updates(){
inquirer
.prompt([
  {
    name: "choice",
    type: "rawlist",
    message: "Which role would you like to update?",
    choices: function () {
      let choiceArray = [];
      for (let i = 1; i < results.length; i++) {
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
.then(function (answer) {
  updateToChosenRole(answer);
  return answer;
})
}

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

  ],

)
};

  // List of vanilla js function 
  async function viewEmployees() {
    const employees = await db.findAllEmployees();
    console.log("\n");
    console.table(employees);
    search();
  
  }
  
  async function viewDepartments() {
    const departments = await db.findAllDepartment();
    console.log("\n");
    console.table(departments);
    search()
  }
  
  async function viewRoles() {
    const roles = await db.findAllRoles()
    console.log("\n")
    console.table(roles); 
    search()
  }
  
    
  async function addEmployees() {
    const roles = await db.findAllRoles()
    console.log("\n")
    console.table(roles); 
    search()
  }

    
  async function updates() {
    const roles = await db.findAllRoles()
    console.log("\n")
    console.table(roles); 
    search()
  }
function quit(){
    consol.log("Thank you!");
    process.exit();
  }

