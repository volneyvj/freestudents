const express = require("express");
const router = express.Router();

router.get("/profile/:id/", (req, res, next) => {
    const {
        id
    } = req.params;
    res.render("user/view_profile")
});

module.exports = router;