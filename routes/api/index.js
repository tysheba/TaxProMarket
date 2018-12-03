const router = require("express").Router();
const taxProsRoutes = require("./taxPros");

// TaxPro routes
router.use("/taxpros", taxProsRoutes);

module.exports = router;