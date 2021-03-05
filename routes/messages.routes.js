const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const Message = require("../models/Message.model");


router.get("/messages/:id/", (req, res) => {
  const {
    id
  } = req.params;
  Message.find({
      to: id
    })
    .populate('to')
    .populate('from')
    .then(userMessages => {
      const userMsg = userMessages
    Message.find({
        to: id,
        status: "Não Respondida",
      })
      .populate('to')
      .populate('from')
      .then(notAnswered => {
        const notAnsweredMsg = notAnswered
      res.render("user/messages.hbs", {data: { userMsg, notAnsweredMsg }})
    })
  })
    .catch((err) => console.log(`Error while getting the messages from the DB: ${err}`));
});

router.post("/sendmessage/:to/", (req, res) => {
  const {
    to
  } = req.params;
  const from = req.session.currentUser._id;
  const message = req.body.mensagem;
  const status = "Não Respondida"
  const id = req.body.idMsg
  Message.create({
      message,
      from,
      to,
      status
    })
    .then(sentMessage => res.redirect(`/user/${from}`))
Message.findByIdAndUpdate(id)
  status: "Respondida"
Message.findByIdAndUpdate(id, {status: "Respondida"}, { new: true })
.then(updatedMsg => console.log ("okkk"))
    .catch((err) => console.log(`Error while sending the messages to the DB: ${err}`));
});

module.exports = router;