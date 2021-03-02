const express = require("express");
const router = express.Router();

router.get("/schedule/:id", (req, res, next) => {
    const {
        id
    } = req.params;
    res.render("user/main/#schedule")
});

module.exports = router;