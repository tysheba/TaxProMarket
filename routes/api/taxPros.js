const router = require("express").Router();
// Requiring the `User` model for accessing the `users` collection
const taxproController = require("../../controllers/taxproController");


router
.route("/")
// .get(function(req, res) {
//   res.send("Hello World")
//     // res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
  .get(taxproController.findAll)
  .post(taxproController.create);


router
  .route("/:id")
  .get(taxproController.findById)
  .put(taxproController.update)
  .delete(taxproController.remove);

module.exports = router;
