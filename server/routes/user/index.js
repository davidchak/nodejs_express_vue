const router = require("express").Router();

router.get("/:id", (req, res) => {
    res.send(`<h2>User: ${ req.params.id } </h2>`);
})

module.exports = router;