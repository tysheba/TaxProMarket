var db = require("../models");

module.exports = function(app) {
  //Get all pros
  app.get("/api/pros", function(req, res) {
    db.Volunteer.findAll({}).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  // Create a new pro
  app.post("/api/pro", function(req, res) {
    console.log(req.body);
    db.Volunteer.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    }).then(function(dbVolunteer) {
      res.json(dbVolunteer);
    });
  });

  //create new customer
  app.post("/api/customer", function(req, res) {
    console.log(req.body);
    db.requests.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
      })
      .then(function(dbrequests) {
        res.json(dbrequests);
      });
  });
};