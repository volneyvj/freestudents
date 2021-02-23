const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose');


module.exports = (app) => {

  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        // sameSite: 'none',
        httpOnly: true,
        maxAge: 1200000 // 120 * 1000 ms === 20 min
      },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        // ttl => time to live
        ttl: 60 * 60 * 48 // 60sec * 60min * 48h => 2 day
      })
    })
  );
};
