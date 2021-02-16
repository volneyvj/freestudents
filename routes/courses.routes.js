const express = require("express");
const router = express.Router();

router.get("/courses", (req, res, next) => {
const coursesQuery = req.query.courses
res.render("courses/search.hbs")
});

router.get("/courses-details/:id/", (req, res, next) => {
    const { id } = req.params;
    res.render("courses/details.hbs")
    });


module.exports = router;
