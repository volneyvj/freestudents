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


<<<<<<< HEAD
//formulário 0 // 

router.post('/signup', (req, res, next) => {

  const {
    email,
    password,
    completeName,
    telefone,
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
    imageUrl,
    student_category,
    student_content,
    teacher_category,
    teacher_content,
    title_course,

  } = req.body;

  return user.create({
    email,
    password,
    completeName,
    telefone,
    city,
    estate,
    birthdate,
    how_got_to_us,
    skype_username,
    zoom_username,
    teams_username,
    other_com,
    other_com_username,
    about,
    imageUrl,
    student_category,
    student_content,
    teacher_category,
    teacher_content,
    title_course,
  })
//    if (!email || !password) {
//     res.render('user/login', {
//       errorMessage: '!Please provide your email and password.'
//     });
//     return;
//   }
//   console.log(req.session);

//   User.findOne({
//       completeName
//     })
//     .then(user => {
//       if (!user) {
//         res.render('auth/login', {
//           errorMessage: 'USER  not registered.'
//         });
//         return;
//       } else if (bcryptjs.compareSync(password, user.password)) {
//         //   console.log(`${username} and password ${user.password}`)
//         req.session.currentUser = user;
//         res.redirect('/user/view_profile.hbs');
//       } else {
//         res.render('auth/login', {
//           errorMessage: 'Incorrect password.'
//         });
//       }
//     })
//     .catch(error => next(error));
});



// // ****************************************************************************************
// // GET route to display the form to create a new movie
// // ****************************************************************************************

// router.get("/movies/create", (req, res) => res.render("movie-create"));

// // ****************************************************************************************
// // POST route for saving a new movie in the database
// // This route has the image upload example 🥳
// // ****************************************************************************************

// router.post("/movies/create", fileUploader.single("image"), (req, res) => {
//   const { title, description } = req.body;

//   Movie.create({ title, description, imageUrl: req.file.path })
//     .then(() => res.redirect("/movies"))
//     .catch((error) => console.log(`Error while creating a new movie: ${error}`));
// });


// // ****************************************************************************************
// // POST route to save changes after updates in a specific movie
// // ****************************************************************************************

// router.post("/movies/:id/edit", fileUploader.single("image"), (req, res) => {
//   const { id } = req.params;
//   const { title, description } = req.body;

//   let imageUrl;
//   if (req.file) {
//     imageUrl = req.file.path;
//   } else {
//     imageUrl = req.body.existingImage;
//   }

//   Movie.findByIdAndUpdate(id, { title, description, imageUrl }, { new: true })
//     .then(() => res.redirect(`/movies`))
//     .catch((error) => console.log(`Error while updating a single movie: ${error}`));
// });

=======
>>>>>>> 22982216ff2c49154b0235abf6c6c98f2cb202b5
module.exports = router;