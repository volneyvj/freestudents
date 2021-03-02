const express = require("express");
const router = express.Router();
const Schedule = require("../models/Schedule.model");

router.get("/schedule/:id", (req, res, next) => {
    const {
        id
    } = req.params;
    res.render("user/main/#schedule")
});


router.post("/signcourse/:course/:teacher/", (req, res) => {
    const {
      course,
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
        course,
        teacher,
        status,
        student,
        classes_completed,
        schedule_dates: [date1, date2, date3, date4, date5]
      })
      .then(sentSchedule => res.redirect(`/user/${student}`))
      .catch((err) => console.log(`Error while sending the request to the DB: ${err}`));
  });

module.exports = router;