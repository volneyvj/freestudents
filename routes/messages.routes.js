const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Message = require("../models/Message.model");



router.get("/messages/:id/", (req, res) => {
    const { id } = req.params;
    Message.find({to: id})
    .populate('to')
    .populate('from')
    .then(userMessages => res.render("user/messages.hbs", userMessages))
    .catch((err) => console.log(`Error while getting the messages from the DB: ${err}`));
});


// router.post('/sendmessage', (req, res, next) => {

//     const { mensagem } = req.body;


module.exports = router;

