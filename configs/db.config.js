const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/freestudents-db-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error("Error connecting to mongo", err));

  const Category = require('../models/Category.model');
  const User = require('../models/User.model');
  const Message = require('../models/Message.model');
  const Course = require('../models/Course.model');
  const Schedule = require('../models/Schedule.model');