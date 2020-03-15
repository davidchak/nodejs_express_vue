const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({api: "v1.0"});
})


module.exports = router;