const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({ api: "v1.0" });
})

router.use("/catalog",  
    require("./catalog")
);

module.exports = router;