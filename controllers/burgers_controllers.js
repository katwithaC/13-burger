var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");


router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/burgers", function(req, res) {
    burgers.insertOne([
      "burger_name"
    ], [
      req.body.burger_name
    ], function() {
      
      res.redirect("/");
    });
  });
  
  router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.updateOne({
      devoured: false,
    }, condition, function (data) {
      res.redirect("/");
    });
  });
  
  router.delete("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burgers.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router;