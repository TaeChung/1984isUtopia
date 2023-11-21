// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connect to database

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '1one',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

function main_menu() {



inquirer.prompt ([
  {
    type:"list", 
    message:"what would you like to do?",
    name: "selection",
    choices: ["view all departments", "view all employees", "view all roles", "add a department", "add a role", "add an employee", "update employee role",]
  },
]).then(answers=>{
  if(answers.selection=="view all departments"){
    getalldepts()
  }
  if(answers.selection=="view all roles"){
    getallroles()
  } 
  if(answers.selection=="view all employees"){
    getallserfs()
  }
  if(answers.selection=="add a department"){
    addadepartment()
  }
  if(answers.selection=="add a role"){
    addarole()
  }
  if(answers.selection=="add an employee"){
    addaserf()
  }
  if(answers.selection=="update employee role"){
    changeserfrole()
  }

});

}



  function getallroles() {
  const sql = "SELECT * FROM roles"
  
  
  db.query(sql, (err, results) => {
    if (err) {
     console.log(err)
      return;
    } 
    console.table(results)
    main_menu()
  });
  };

  function getalldepts() {
  const sql = "SELECT * FROM department";
  console.log ()
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err)
       return;
    }
    console.table(results)
    main_menu()
    });
};

function getallserfs() {
  const sql = "SELECT * FROM employees";
  console.log()
  
  db.query(sql, (err, results) => {
   console.log(err)
   if (err) {
    console.log(results)
    return;
   }
   console.table(results)
   main_menu()
  });
};
    
  
// Read list of all reviews and associated movie name using LEFT JOIN

function addadepartment() {

  return inquirer.prompt ([
    {
      type:"input",
      message:"what is the new department's name",
      name:"name"
    },
  ])
  .then(answers=>{
    console.log(answers.name)
    const sql = 'INSERT INTO department (name) VALUES (?)';   
    const deptname = answers.name;

    db.query(sql, deptname, (err) => {
      if (err) {
        console.log(err)
      }
      console.log('department added');
      return getalldepts()
    })
  });
};

function addarole() {
  return inquirer.prompt ([
    {
      type:"input",
      message:"new role's title",
      name:"name"
    },
    {
      type:"input",
      message:"new role's salary",
      name:"salary"
    },
    {
      type:"input",
      message:"new role's department id",
      name:"id"
    },
  ])
    .then(answers=>{
      console.log(answers.name)
      const sql = 'INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)';
      // const rolename = answers.name;

      db.query(sql, [answers.name,answers.salary,answers.id], (err) => {
        if (err) {
          console.log(err)
        }
        console.log('roll added');
        return getallroles()
      })
    });
};
  function addaserf() {
    return inquirer.prompt ([
      {
        type:"input",
        message:"new employee's first name",
        name:"first_name"
      },
      {
        type:"input",
        message:"new employee's last name",
        name:"last_name"
      },
      {
        type:"input",
        message:"new employee's manager",
        name:"manager_id"
      },
      {
        type:"input",
        message:"new employee's role",
        name:"roles_id"
      },
    ])
    .then(answers=>{
      console.log(answers)
      const sql = 'INSERT INTO employees (first_name, last_name, manager_id, roles_id) VALUES (?,?,?,?)';

      db.query(sql, [answers.first_name,answers.last_name,answers.manager_id,answers.roles_id], (err) => {
        if (err) {
          console.log(err)
        }
        console.log('employee added');
        return getallserfs()
      })    
    });
  };
  function changeserfrole() {
    return inquirer.prompt ([
      {
        type:"input",
        message:"select employee",
        name:"employees"
      },
      {
        type:"input",
        message:"update employee role",
        name:"roles_id"
      },
      
    ])
    .then(answers=>{
      console.log(answers.name)
      const sql = `UPDATE INTO employees = "roles_id" SET_NAME = "employees" WHERE = employees VALUES (?,?)`;

      db.query(sql, [answers.employees, answers.roles_id], (err) => {
        if (err) {
          console.log(err)
        }
        console.log('employee role changed')
        return getallroles()
      })
    });  
  };

main_menu()