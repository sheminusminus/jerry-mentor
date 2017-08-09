
const express = require('express');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
console.log("NODE_ENV: ", process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));

  // Return the main index.html, so react-router render the route in the client
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
  });
}

app.use(express.static('public'));

// Return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'));
});

const host = "localhost"
const user = "root"
const pswd = "riley272"
const dbname = "mentorconnectiondb"

// config db ====================================
const pool = mysql.createPool({
  host: host,
  user: user,
  password: pswd,
  port: "3306",
  database: dbname
});

const COLUMNS = [
  'last_name',
  'first_name'
];

app.get('/api/books', (req, res) => {

  const firstName = req.query.firstName;

  if (!firstName) {
    res.json({
      error: 'Missing required parameters',
    });
    return;
  }

  let queryString = ``;
  if(firstName=="*"){
    queryString = `SELECT * from authors`
  }else{
     queryString = `SELECT * from authors WHERE first_name REGEXP '^${firstName}'`
  }

  pool.query(queryString,
         function(err, rows, fields) {
          if (err) throw err;

          if (rows.length > 0){
            res.json(
              rows.map((entry) => {
                const e = {};
                COLUMNS.forEach((c) => {
                  e[c] = entry[c];
                });
                return e;
                })
              );
            } else {
              res.json([]);
            }
      });

});

app.get('/mentors', (req, res) => {
  const userId = req.query.userId;
  // then get the data you wanna update from the request body
  // const first = req.body.first || '';
  // const last = req.body.last || '';
  // const email = req.body.email;
  // const password = req.body.password;

  // run query string
  const queryString = `select * from mentors WHERE mentorID = ${userId}`;

  console.log(queryString);
  pool.query(queryString,
         function(err, rows, fields) {
          if (err) throw err;
          console.log('got user:', rows);

          if (rows.length > 0){
            res.json(
              rows.map((entry) => {
                const e = {};
                COLUMNS.forEach((c) => {
                  e[c] = entry[c];
                });
                console.log(e);
                })
              );
            } else {
              res.json([]);
            }
      });
});

app.get('/mentees', (req, res) => {
  const userId = req.query.userId;
  // then get the data you wanna update from the request body
  // const first = req.body.first || '';
  // const last = req.body.last || '';
  // const email = req.body.email;
  // const password = req.body.password;

  // run query string
  const queryString = `select * from mentees WHERE mentorID = ${userId}`;

  console.log(queryString);
  pool.query(queryString,
         function(err, rows, fields) {
          if (err) throw err;
          console.log('got user:', rows);

          if (rows.length > 0){
            res.json(
              rows.map((entry) => {
                const e = {};
                COLUMNS.forEach((c) => {
                  e[c] = entry[c];
                });
                console.log(e);
                })
              );
            } else {
              res.json([]);
            }
      });
});

app.get('/users', (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  const userType = req.query.userType || 'MENTEE';

  let queryString = '';
  if (userType === 'MENTOR') {
    queryString = `SELECT * FROM mentors WHERE email = '${email}' AND pass = '${password}'`;
  } else {
    queryString = `SELECT * FROM mentees WHERE email = '${email}' AND pass = '${password}'`;
  }

  pool.query(queryString,
         function(err, rows, fields) {
          if (err) throw err;
          console.log(rows);
          if (rows.length > 0){
            // res.json(
            //   rows.map((entry) => {
            //     const e = {};
            //     COLUMNS.forEach((c) => {
            //       e[c] = entry[c];
            //     });
            //     console.log(e);
            //     })
            //   );
            res.json(rows[0]);
            } else {
              res.json([]);
            }
      });
});

// to update user data
app.post('/users/quizzes', (req, res) => {
  const userId = req.body.userId;
  // then get the data you wanna update from the request body
  // const first = req.body.first || '';
  // const last = req.body.last || '';
  // const email = req.body.email;
  // const password = req.body.password;
  const userType = req.body.userType || 'MENTEE';
  const score = req.body.score;
  const type = req.body.type;

  // run query string
  let queryString = '';
  if (userType === 'MENTOR') {
    queryString = `INSERT INTO mentors_scores (mentorID, quiz_type, score) VALUES (${userId}, '${type}', ${score})`;
  } else {
    queryString = `INSERT INTO mentees_scores (menteeID, quiz_type, score) VALUES (${userId}, '${type}', ${score})`;
  }
  pool.query(queryString,
         function(err, rows, fields) {
          if (err) throw err;
          console.log(rows);

          if (rows.length > 0){
            res.json(
              rows.map((entry) => {
                const e = {};
                COLUMNS.forEach((c) => {
                  e[c] = entry[c];
                });
                console.log(e);
                })
              );
            } else {
              res.json([]);
            }
      });
});

// to update user data
app.post('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  // then get the data you wanna update from the request body
  // const first = req.body.first || '';
  // const last = req.body.last || '';
  // const email = req.body.email;
  // const password = req.body.password;
  // const userType = req.body.userType || 'MENTEE';

  // run query string
  let queryString = '';
  if (userType === 'MENTOR') {
    queryString = `INSERT INTO mentors (FName, LName, email, pass) VALUES ('${first}', '${last}', '${email}', '${password}')`;
  } else {
      queryString = `INSERT INTO mentees (FName, LName, email, pass) VALUES ('${first}', '${last}', '${email}', '${password}')`;
  }

  pool.query(queryString,
         function(err, rows, fields) {
          if (err) throw err;
          console.log(rows);

          if (rows.length > 0){
            res.json(
              rows.map((entry) => {
                const e = {};
                COLUMNS.forEach((c) => {
                  e[c] = entry[c];
                });
                console.log(e);
                })
              );
            } else {
              res.json([]);
            }
      });
});

app.post('/users', (req, res) => {
  const first = req.body.first || '';
  const last = req.body.last || '';
  const email = req.body.email;
  const password = req.body.password;
  const userType = req.body.userType || 'MENTEE';

  let queryString = '';
  if (userType === 'MENTOR') {
    queryString = `INSERT INTO mentors (FName, LName, email, pass) VALUES ('${first}', '${last}', '${email}', '${password}')`;
  } else {
      queryString = `INSERT INTO mentees (FName, LName, email, pass) VALUES ('${first}', '${last}', '${email}', '${password}')`;
  }

  pool.query(queryString,
         function(err, rows, fields) {
          if (err) throw err;
          console.log(rows);

          if (rows.length > 0){
            res.json(
              rows.map((entry) => {
                const e = {};
                COLUMNS.forEach((c) => {
                  e[c] = entry[c];
                });
                console.log(e);
                })
              );
            } else {
              res.json([]);
            }
      });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});