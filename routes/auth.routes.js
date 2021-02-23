const { Router } = require('express');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model');
const mongoose = require('mongoose');
const Category = require('../models/Category.model')
const Course = require('../models/Course.model')


router.get('/signup', (req, res) => {

  Category.find()
    .then(allCategories => {
      const foundCategories = allCategories
      res.render('signup', { data: { foundCategories } })
    })
    .catch(error => next(error));
});

router.post('/signup', (req, res, next) => {

  // console.log (req.body)
  const { email, password, name, city, state, birthdate, how_got_to_us, skype_username, zoom_username, teams_username, other_com, other_com_username,
    about, phone, imageUrl, student, teacher, interests, student_content } = req.body;

  const course_name = req.body.course_name;
  const teacher_category = req.body.teacher_category;
  const teacher_content = req.body.teacher_content;
  const course_description = req.body.course_description;
  const classes_number = req.body.classes_number;
  const week_availability = req.body.week_availability;
  const hour_availability = req.body.hour_availability;
  
  if (!email || !password) {
    res.render('signup', { errorMessage: '!Por favor, preencha E-mail e Senha.' });
    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(500)
      .render('signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      User.create({
        email,
        password: hashedPassword,
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
        imageUrl,
        student,
        teacher,
        interests,
        student_content,
        rating: 4,
        admin_level: 3,
      })
    .then(createdUser => {
        // req.session.currentUser = createdUser; 
        console.log('user created: ', createdUser);
        const newUserId = createdUser._id
    
  // User.findOne({ email: email }).select('_id')
  //   .then(newUser => {
  //     const newUserId = newUser
  //     req.session.currentUser = newUserId;
  //   console.log(`aqui primeir user ${newUserId}`);

  Course.create({
    name: course_name,
    category: teacher_category,
    content: teacher_content,
    description: course_description,
    user: newUserId,
    classes: classes_number,
    week_availability: week_availability,
    hour_availability: hour_availability,
    status: "Ativo",
  })
  .then (courseIncluded => {
console.log(`vamos ver oqh isso: ${courseIncluded}`);
  Course.findOne({ name: course_name, user: newUserId }).select('_id')
    .then(newCourse => {
      const newCourseId = newCourse
    
      // console.log(`ID DO CURSO ${newCourseId}`);

  User.findByIdAndUpdate(newUserId, { $push: { my_courses: newCourseId } }, { new: true })
      .then(user => {
      console.log(`User id EH:${newUserId} e o curso eh ${newCourseId}`)
      res.redirect(`/user/${newUserId}`);
    })
})
})
})
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render('signup', { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render('signup', {
          errorMessage: 'E-mail needs to be unique.'
        });
      }
      else {
        next(error);
      }
  })
  })
  });


// ROTA DE LOGIN

router.post('/login', (req, res, next) => {

  const { email, password } = req.body;

  if (!email || !password) {
    res.render('index', { errorMessage: '!Please provide your email and password.' });
    return;
  }
 
  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.render('index', { errorMessage: 'USER  not registered.' });
        return;
      } else if (bcryptjs.compareSync(password, user.password)) {
        req.session.currentUser = user;
        // console.log(`primeira vez: ${req.session.currentUser}`);
        res.redirect(`/user/${user._id}`);
      } else {
        res.render('index', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => next(error));
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;

