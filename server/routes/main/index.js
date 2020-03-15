const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendfile(__dirname + "main/index.html");
})

module.exports = router;