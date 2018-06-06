const orm = require('../config/orm.js');

// code that will call the ORM functions using burger specific input for the ORM.
var burger = {

  selectAll: function(cb){
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  insertOne: function (burger_name, cb) {
    var colObj = {
      burger_name: burger_name,
      devoured: false
    }
    orm.insertOne('burgers', colObj, function (res) {
      cb(res);
    });
  },

  updateOne: function (burger_id, cb) {
    var colToSet = { devoured: true }
    var condition = { id: burger_id }
    orm.updateOne('burgers', colToSet, condition, function(res) {
      cb(res);
    });
  }

};

// Export at the end of the burger.js file.
module.exports = burger;