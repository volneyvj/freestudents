const express = require("express");
const router = express.Router();

// router.get("/admin", (req, res, next) => {
//     const { id } = req.params;
//     Schedule.find({$or:[{teacher: id},{student: id}]})
//     .populate('course','teacher','stundent')
//     .then((scheduleFound) => {
//         const scheduleFounded = scheduleFound
// .catch((err) => console.log(`Error while getting the user from the DB: ${err}`));
//   });


//   router.get("/user/:id/", (req, res) => {
//     const { id } = req.params;
//       Schedule.find({$or:[{teacher: id},{student: id}]})
//     // .populate('course','teacher','stundent')
    
//     User.findById(id)
//       .then((userFound) => {
//         const userFounded = userFound
//     Message.find({to: id})
//     .then((msgFound) => {
//       const messagesFounded = msgFound
  


module.exports = router;
