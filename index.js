const express = require('express');
const mysql = require('mysql');
const app = express();

// Database connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: '3tierhello'
});

// Establishing connection with the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to the database!');
});

// Fetching data from the database and sending as a response
app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error('Error fetching data from database: ', err);
      res.status(500).send('Internal server error');
      return;
    }
    let user_list = '';
    rows.forEach((user) => {
      user_list += `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}<br>`;
    });
    res.send(user_list);
  });
});

// Starting the server
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
