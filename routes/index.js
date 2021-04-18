// Code taken from Module 18 assignment

const router = require("express").Router();
const apiRoutes = routes("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1> 404 Error!<h1>");
});

module.exports = router;