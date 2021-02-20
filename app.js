require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

// nao lembro para que serve?
const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


// const Course = require("./models/Course.model");
const app = express();

// require database configuration
require('./configs/db.config');

// session 
require('./configs/session.config')(app);


// Middleware Setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// também nao lembro?
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

// Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


var Course = require('./models/Course.model.js')

app.use('/', require('./routes/index.routes.js'));
app.use('/', require('./routes/auth.routes'));
app.use('/', require('./routes/courses.routes'));
app.use('/', require('./routes/messages.routes'));
app.use('/', require('./routes/profile.routes'));
app.use('/', require('./routes/schedule.routes'));
app.use('/', require('./routes/user.routes'));
app.use('/', require('./routes/admin.routes'));

// Catch all error handler
app.use((error, req, res) => {
  // Set error information, with stack only available in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  // render the error page
  res.status(error.status || 500);
  res.render('error');
});

module.exports = app;
