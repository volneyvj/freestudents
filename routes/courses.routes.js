const express = require("express");
const router = express.Router();
const Course = require("../models/Course.model");
const Catgory = require("../models/Category.model");
const User = require("../models/User.model");


router.get("/courses", (req, res, next) => {
const coursesQuery = req.query.courses
res.render("courses/search.hbs")
});

router.get("/courses-details/:id/", (req, res, next) => {
    const { id } = req.params;
    Course.findById(id)
    .populate('category')
    .populate('user')
    .then(courseDetails => res.render("courses/details.hbs", courseDetails))
    .catch((err) => console.log(`Error while getting the course from the DB: ${err}`));
});

router.get("/courses-search/", (req, res) => {
     Course.find()
    .populate('category')
    .populate('user')
    .then(allCourses => res.render("courses/search.hbs", {coursesF: allCourses}))
    .catch((err) => console.log(`Error while getting the course from the DB: ${err}`));
});



module.exports = router;
