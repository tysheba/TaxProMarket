var path = require("path");

module.exports = function(app) {
  // Load Home Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
  // Load News Page
  app.get("/news", function(req, res) {
    res.sendFile(path.join(__dirname, "../news.html"));
  });
  // Load Contact Page
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../contact.html"));
  });
  // Load About Page
  app.get("/meals", function(req, res) {
    res.sendFile(path.join(__dirname, "../about.html"));
  });
};