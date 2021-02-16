const express = require("express");
const router = express.Router();


const User = require("../models/User.model");

// // ********* require fileUploader in order to use it *********
// const fileUploader = require("../configs/cloudinary.config");

// // ****************************************************************************************
// // GET route to display all the movies
// // ****************************************************************************************

router.get("/user/:id/", (req, res) => {
    const { id } = req.params;
  User.findById(id)
    .then((userFound) => {
      res.render("user/main.hbs", { user: userFound });
    })
    .catch((err) => console.log(`Error while getting the user from the DB: ${err}`));
});

router.get("/user/:id/edit", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((userToEdit) => res.render("user/edit.hbs", userToEdit))
    .catch((error) => console.log(`Error while getting a single user for edit: ${error}`));
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

module.exports = router;
