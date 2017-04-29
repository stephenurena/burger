var orm = require("../config/orm.js");

var burger = {
              all: function(cb) {
                orm.selectAll("burgers", function(res) {
                  cb(res);
                });
              },
             
              create: function(vals, cb) {
                orm.insertOne("burgers", "burger_name", vals, function(res) {
                  cb(res);
                });
              },
              
              update: function(condition, cb) {
                orm.updateOne("burgers", condition, function(res) {
                  cb(res);
                });
              }
};

//use for the burgers_controller.js
module.exports = burger;