const router = require("express").Router();

// router.use("/", require("./main/index"))
// router.use("/auth", require("./auth"))
router.use("/api", require("./api"))
// router.use("/user", require("./user"))

module.exports = router;