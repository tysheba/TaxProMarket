const express = require("express");
const bodyParser = require("body-parser");
const crypto = require('crypto');
const mongoose = require("mongoose");
const multer = require('multer');
// const grid = require('gridfs-stream');
// const gridFsStorage = require("multer-gridfs-storage");
// const methodOverride = require('method-override');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use a query string with our form to create a delete request
// app.use(methodOverride('_method'))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// DB Config
const db = require('./config/keys').mongoURI;
// Connect to the Mongo DB
mongoose.connect(process.env.db || "mongodb://localhost/taxProMarket")
  .then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err));


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
