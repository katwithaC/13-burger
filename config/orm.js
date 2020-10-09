var connection = require("../config/connection.js");

var orm = {

   selectAll: function() {
       var queryString = "SELECT * FROM burgers";
       connection.query(queryString, function(err, result) {
           if (err) throw err;
           return result;
       });
   },

   insertOne: function(burger_name, devoured) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (" + burger_name + ", " + devoured + ")";
       connection.query(queryString, function(err, result) {
        if (err) throw err;
        return result;
    });
},
    
   updateOne: function(burger_id, burger_name) {
     var queryString = "UPDATE burgers SET ? WHERE ?";
     connection.query(queryString, function(err, result) {
      if (err) throw err;
      return result;
  });

module.exports = orm;