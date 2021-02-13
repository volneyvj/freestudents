const express = require("express");
const router = express.Router();

// // ********* require Movie model in order to use it *********
// const Movie = require("../models/Movie.model");

// // ********* require fileUploader in order to use it *********
// const fileUploader = require("../configs/cloudinary.config");

// // ****************************************************************************************
// // GET route to display all the movies
// // ****************************************************************************************

// router.get("/movies", (req, res) => {
//   Movie.find()
//     .then((moviesFromDB) => {
//       console.log(moviesFromDB);
//       res.render("movies-list", { movies: moviesFromDB });
//     })
//     .catch((err) => console.log(`Error while getting the movies from the DB: ${err}`));
// });

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
// // GET route for querying a specific movie from the database
// // and pre-filling the edit form
// // ****************************************************************************************

// router.get("/movies/:id/edit", (req, res) => {
//   const { id } = req.params;
//   Movie.findById(id)
//     .then((movieToEdit) => res.render("movie-edit", movieToEdit))
//     .catch((error) => console.log(`Error while getting a single movie for edit: ${error}`));
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
