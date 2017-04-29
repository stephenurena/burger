// require MySql connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    //
    insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
      queryString += " (" + cols.toString() + ") VALUES (?)";
      console.log(queryString);
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      });
    },
    
    updateOne: function(table, condition, cb) {
      var queryString = "UPDATE " + table + " SET devoured = true WHERE" + condition;
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
};

//to use on our models.
module.exports = orm;