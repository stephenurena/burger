// Set up MySQL connection.
var mysql = require("mysql");


var pool  = mysql.createPool({
  connectionLimit : 5,
  host            : 'us-cdbr-iron-east-03.cleardb.net',
  user            : 'b7994bf284ba28',
  password        : '600eb047',
  database        : 'heroku_b2cac2b68edc9dc'
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "b7994bf284ba28",
//   password: "600eb047",
//   database: "burgers_db"
// });

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for our ORM to use.
// module.exports = connection;
module.exports = pool;
