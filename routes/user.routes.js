const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Message = require("../models/Message.model");
const Category = require("../models/Category.model");
const Course = require("../models/Course.model");
const Schedule = require("../models/Schedule.model");
const fileUploader = require('../configs/cloudinary.config');

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

    let formatedStudentDates = [];
    for (let schedulesS of scheduleFounded) {
      for (let datesRegistraded of schedulesS.schedule_dates) {
        if (datesRegistraded === null) {
          formatedStudentDates.push({"fDate": datesRegistraded})
        }
        else {
          formatedStudentDates.push({"fDate": datesRegistraded.toISOString().substring(0, 10)});
        }
      }
    }


  User.findById(id)
    .then((userFound) => {
      const userFounded = userFound
      // console.log(userFounded);
      interest_category_id = userFounded.interests[0]
  Message.find({to: id}).limit(10)
  .then((msgFound) => {
    const messagesFounded = msgFound
  Schedule.find({teacher: id, status: 'Solicitado'})
  .populate('student')
  .populate('course')
  .then((schedule_notification) => {
    const schedule_notes = schedule_notification;
// console.log(schedule_notification);
let formatedDates = [];
for (let schedulesN of schedule_notification) {
  for (let datesDesired of schedulesN.schedule_dates) {
    if (datesDesired === null) {
      formatedDates.push({"fDate": datesDesired})
    }
    else {
      formatedDates.push({"fDate": datesDesired.toISOString().substring(0, 10)});
    }
  }
}
console.log(schedule_notes);
    Course.find({}).sort('category').limit(6)
  .then((searchFound) => {
      const searchFounded = searchFound
      res.render("user/main.hbs", {data: {userFounded, messagesFounded, scheduleFounded, searchFounded, schedule_notes, formatedDates, formatedStudentDates}}) 
  })
    })
  })
}) 
})
    .catch((err) => console.log(`Error while getting the user from the DB: ${err}`));
});

router.get("/user/:id/edit", (req, res) => {
  const { id } = req.params;
  User.findById(id)
  .populate('my_courses')
    .then((userToEdit) => {
      Category.find()
      .then(allCategories => {
        const foundCategories = allCategories
      res.render("user/edit.hbs", {data: {userToEdit, foundCategories}})
    })
  })
    .catch((error) => console.log(`Error while getting a single user for edit: ${error}`));
});

router.post("/add_course/:id", (req, res) => {
  const id  = req.params.id;
  const course_name = req.body.course_name;
  const teacher_category = req.body.teacher_category;
  const teacher_content = req.body.teacher_content;
  const course_description = req.body.course_description;
  const classes = req.body.classes;
  const week_availability = req.body.week_availability;
  const hour_availability = req.body.hour_availability;
  
  Course.create({
    name: course_name,
    category: teacher_category,
    content: teacher_content,
    description: course_description,
    user: id,
    classes: classes,
    week_availability: week_availability,
    hour_availability: hour_availability,
    status: "Ativo",
  })
  .then(addedCourse => {
    const courseAddedId = addedCourse._id
  User.findByIdAndUpdate(id, { $push: { my_courses: courseAddedId} }, { new: true })
  .then(updatedUserCourse => res.redirect(`/user/${id}`))
})
  .catch(error => console.log(`Error while updating a single schedule: ${error}`));
  });


  
  router.post('/edituser/:id', fileUploader.single('imageUrl'), (req, res) => {
    const { id } = req.params;
    const { email, password, name, city, state, birthdate, how_got_to_us, skype_username, zoom_username, teams_username, other_com, other_com_username,
      about, phone } = req.body;
     
      let imageUrl;
      if (req.file) {
        imageUrl = req.file.path;
      } else {
        imageUrl = req.body.existingImage;
      }
      console.log(imageUrl);
  
    // const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    // if (!regex.test(password)) {
    //   res
    //     .status(500)
    //     .render('signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    //   return;
    // }
  
    // bcryptjs
    //   .genSalt(saltRounds)
    //   .then(salt => bcryptjs.hash(password, salt))
    //   .then(hashedPassword => {
        User.findByIdAndUpdate(id, {
          email,
          // password: hashedPassword,
          name,
          city,
          state,
          birthdate,
          how_got_to_us,
          skype_username,
          zoom_username,
          teams_username,
          other_com,
          other_com_username,
          about,
          phone,
          imageUrl
        }, { new: true })
      .then(updatedUser => res.redirect(`/user/${id}`))
      .catch(error => console.log(`Error while updating a single schedule: ${error}`));
      
    });

module.exports = router;