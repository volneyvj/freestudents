const express = require("express");
const router = express.Router();

router.get("/messages/:id/", (req, res, next) => {
    const { id } = req.params;
    res.render("user/messages.hbs")
});

module.exports = router;
