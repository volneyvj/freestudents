const express = require("express");
const router = express.Router();
const Course = require("../models/Course.model");
const Category = require('../models/Category.model')
const Schedule = require("../models/Schedule.model");
const User = require("../models/User.model");


router.get("/courses", (req, res, next) => {
  const coursesQuery = req.query.courses
  res.render("courses/search.hbs")
});

router.get("/courses-details/:id/", (req, res, next) => {
  const {
    id
  } = req.params;
  Course.findById(id)
    .populate('category')
    .populate('user')
    .then(courseDetails => {
      const classesArray = [];
      for (let i = 1; i <= courseDetails.classes; i += 1) {
        classesArray.push(i);
      }
      const courseDetalhes = courseDetails
      const user_id = req.session.currentUser._id;
      res.render("courses/details.hbs", {
        data: {
          courseDetalhes,
          user_id,
          classesArray
        }
      })
    })
    .catch((err) => console.log(`Error while getting the course from the DB: ${err}`));
});

router.get("/courses-search/", (req, res) => {
  Course.find()
    .populate('category')
    .populate('user')
    .then(allCourses => {
      const user_id = req.session.currentUser._id;
      const coursesF = allCourses
      res.render("courses/search.hbs", {
        data: {
          coursesF,
          user_id
        }
      })
    })
    .catch((err) => console.log(`Error while getting the course from the DB: ${err}`));
});

router.post("/signcourse/:course/:teacher/", (req, res) => {
  const {
    courseReqId,
    teacher
  } = req.params;
  const student = req.session.currentUser._id;
  const {
    date1,
    date2,
    date3,
    date4,
    date5
  } = req.body;
  const status = "Solicitado"
  const classes_completed = 0;
  Schedule.create({
      course: courseReqId,
      teacher,
      status,
      student,
      classes_completed,
      schedule_dates: [date1, date2, date3, date4, date5]
    })
    .then(sentSchedule => res.redirect(`/user/${student}`))
    .catch((err) => console.log(`Error while sending the request to the DB: ${err}`));
});


router.post("/aceitar/:id/:usuario", (req, res) => {
  const {
    id,
    usuario
  } = req.params;
  Schedule.findByIdAndUpdate(id, {
      status: 'Aceito'
    }, {
      new: true
    })
    .then(updatedSchedule => res.redirect(`/user/${usuario}`))
    .catch(error => console.log(`Error while updating a single schedule: ${error}`));
});

router.post("/recusar/:id/:usuario", (req, res) => {
  const {
    id,
    usuario
  } = req.params;
  Schedule.findByIdAndUpdate(id, {
      status: 'Recusado'
    }, {
      new: true
    })
    .then(updatedSchedule => res.redirect(`/user/${usuario}`))
    .catch(error => console.log(`Error while updating a single schedule: ${error}`));
});

router.get('/courses/:id/:user/delete', (req, res) => {
  const {
    id,
    user
  } = req.params;

  User.findById(user)
    .then(userFound => {
      userFound.my_courses.pull({
        id
      })
    })
    .catch(error => console.log(`error while splicing: ${error}`));
  Course.findByIdAndDelete(id)
    .then(deletedCourse => res.redirect(`/user/${user}`))
    .catch(error => console.log(`error while deleting: ${error}`));
});

module.exports = router;