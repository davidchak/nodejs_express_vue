const router = require("express").Router();

// test route
router.get("/", (req, res) => {
  res.json({ api: "v1.0" });
});

router.use("/catalog", require("./catalog"));

module.exports = router;
