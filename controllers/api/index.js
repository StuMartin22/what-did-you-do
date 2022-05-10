const router = require("express").Router();
// const foodRoutes = require("./foodRoutes");
const userRoutes = require("./userroutes");
// const categoryRoutes = require("./categoryRoutes");

router.use("/users", userRoutes);
// router.use("/categories", categoryRoutes);
// router.use("/food", foodRoutes);

module.exports = router;