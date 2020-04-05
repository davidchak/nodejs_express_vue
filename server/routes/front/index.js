const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(global.appRoot + "/public/index.html");
})

module.exports = router;