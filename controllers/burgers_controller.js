const db = require('../models');

// TODO: fix this controller routing to use sequelize properly

module.exports = function (app) {

  // Create all our routes and set up logic within those routes where required.
  app.get("/", function (req, res) {

    db.Burger.findAll({}).then(function (dbBurger) {
      res.json(dbBurger);
    });
  )};

    app.post("/api/burgers/", function (req, res) {

      db.Burger.create({
        burger_name: req.body.burger_name
      }).then(function (dbBurger) {
        res.json(dbBurger);
      })
    });

    app.put("/api/burgers/:id", function (req, res) {
      burger.updateOne(req.params.id, function (result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
      );
    });

  }