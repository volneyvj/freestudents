const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Message = require("../models/Message.model");
const Course = require("../models/Course.model");
const Schedule = require("../models/Schedule.model");


// // ********* require fileUploader in order to use it *********
// const fileUploader = require("../configs/cloudinary.config");

// // ****************************************************************************************
// // GET route to display all the movies
// // ****************************************************************************************

router.get("/user/:id/", (req, res) => {
  const { id } = req.params;
    Schedule.find({$or:[{teacher: id},{student: id}]})
  .populate('teacher')
  .populate('student')
  .populate('course')
  .then((scheduleFound) => {
    const scheduleFounded = scheduleFound
  User.findById(id)
    .then((userFound) => {
      const userFounded = userFound
      interest_category_id = userFounded.interests[0]
  Message.find({to: id})
  .then((msgFound) => {
    const messagesFounded = msgFound
    Course.find({}).sort('category').limit(6)
  .then((searchFound) => {
      const searchFounded = searchFound
  
      res.render("user/main.hbs", {data: {userFounded, messagesFounded, scheduleFounded, searchFounded}}) 
  })
    })
  })
})
    .catch((err) => console.log(`Error while getting the user from the DB: ${err}`));
});

router.get("/user/:id/edit", (req, res) => {
  const { id } = req.params;
  User.findById(id)
  .populate('courses')
    .then((userToEdit) => res.render("user/edit.hbs", userToEdit))
    .catch((error) => console.log(`Error while getting a single user for edit: ${error}`));
});


module.exports = router;