// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, colObj, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, colObj],
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },

  updateOne: function (table, colToSet, condition, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    connection.query(queryString,
    [ table, colToSet, condition ],
      function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model
module.exports = orm;