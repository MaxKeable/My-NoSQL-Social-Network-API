// importing express router
const router = require("express").Router();
// importing API routes
const apiRoutes = require("./APIRoutes");
router.use("/api", apiRoutes);
router.use((req, res) => {
  return res.status(404).send("Not found");
});
// Export the router
module.exports = router;
