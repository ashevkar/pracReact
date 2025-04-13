import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';


const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Aishwarya_6',
  database: 'world'
});

db.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
    }
    console.log('connected as id ');
});
    

app.get('/getData', (req, res) => {
  console.log("getData method called.")
  if (db) {
      db.query('SELECT * FROM city limit 10;', (err, rows) => {
          if (err) {
            console.error('Error running query:', err);
            res.status(500).send('Server Error');
            return;
          }
          res.status(200).json({"message": "Data fetched succesfully.", "data": rows});
      });
  } else {
      res.status(400).json({"message": "Database connection refused.", "data": None});
  }
});

app.get('/getData', (req, res) => {
    res.send("Aishwaryyaaaaaaaa");
  });

  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });

