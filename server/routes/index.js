const router = require("express").Router();
const passport = require(global.appRoot + "/middlewares/auth.js");

router.use("/", require("./front"))

router.use("/api", passport.authenticate('bearer', { session: false }), require("./api"))


module.exports = router;