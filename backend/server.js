const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const db = mysql.createConnection ({
    host: "localhost",    
    user: "root",    
    password: "",    
    database: "crud"
});

// VIEW
app.get("/", (req, res) => {  
    const sql = "SELECT * FROM employee";   
    db.query(sql, (err, data) => {  
        if(err) 
        return res.json("Connection Error");   
        return res.json(data);   
     });
});

// ADD
app.post('/api/employee/add', (req, res) => {   
    const sql = "INSERT INTO employee (Lastname, Firstname, Middlename, Month, Day, Year, Age, Address, Contact) VALUES (?)";    
    const values = 
        [ 
            req.body.lastname,
            req.body.firstname,
            req.body.middlename,
            req.body.month,
            req.body.day,
            req.body.year,
            req.body.age,
            req.body.address,
            req.body.contact 
        ]   
    db.query(sql, [values], (error) => {  
      if(error) 
      return res.json("Connection Error to add");   
      return res.json("Successfull Add Employee");   
    })
});

// UPDATE
app.put('/api/employee/update/:id', (req, res) => {   
    const sql = "update employee set Lastname = ?, Firstname = ?, Middlename = ?, Month = ?, Day = ?, Year = ?, Age = ?, Address = ?, Contact = ? where ID = ?";   
    const values = 
        [ 
            req.body.lastname,
            req.body.firstname,
            req.body.middlename,
            req.body.month,
            req.body.day,
            req.body.year,
            req.body.age,
            req.body.address,
            req.body.contact 
        ]   
    const id = req.params.id;        
    db.query(sql, [...values, id], (err, data)  => {       
      if(err) 
      return res.json("Connection Error");   
      return res.json("Successfull Update Employee");   
    })
});

// DELETE
app.delete('/api/employee/delete/:id', (req, res) => {    
    const sql = "DELETE FROM employee WHERE ID = ?";    
    const id = req.params.id;       
    db.query(sql, [id], (err, data) => {      
      if(err) 
      return res.json("Connection Error");   
      return res.json("Successfull Delete Employee"); 
    })
});

// LOCALHOST 8081
app.listen(8081, () => {console.log("Connected Database");});
