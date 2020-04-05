const router = require("express").Router();

// Return all groups without items
router.get("/", (req, res) => {
    res.json({path: 'catalog'})
})

// Return group and group items
router.get("/:group", (req, res) => {
    let group = req.params.group;
    res.json({ group: `${ req.params.group }`})
})


module.exports = router;