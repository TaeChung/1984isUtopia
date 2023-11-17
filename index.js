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
    getallDepts()

  }
  if(answers.selection=="view all roles"){
    getallRoles()
  } 
  if(answers.selection=="view all employees"){
    getALLSerfs()
  }
  if(answers.selection=="add a department"){
    addADEPARTMENT()
  }



});

}



  function getallRoles() {
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

  function getallDepts() {
  const sql = "SELECT * FROM department";
  console.log ("hello")
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err)
       return;
    }
    console.table(results)
    main_menu()
    });
};
// Delete a movie

function getALLSerfs() {
  const sql = "SELECT * FROM employees";

  
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

function addADEPARTMENT() {

  inquirer.prompt ([
    {
      type:"input",
      message:"what is the new department's name",
      name:"create a new department"
    }
  ]).then(answers=>
      const sql = `INSERT INTO department
  VALUES(?)`

  );

  

  
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




// BONUS: Update review name
  const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
  // const params = [req.body.review, req.params.id];

  db.query(sql, (err, result) => {
    if (err) {
      // res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
    //   res.json({
    //     message: 'Movie not found'
    //   });
    // } else {
    //   res.json({
    //     message: 'success',
    //     data: req.body,
    //     changes: result.affectedRows
      // });
    }});
  //   }
  // });


main_menu() 