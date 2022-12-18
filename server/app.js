var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')
const bcryptjs = require('bcryptjs');
const User = require('./models/user');
// Passport
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// CORS
app.use(cors())

// Set up Dotenv
if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

// Acceso a la base de datos
const MongoDB = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.yohxpy9.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(MongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind((console, 'MongoDB connection error: ')))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Funciones PASSPORT
// Se busca usuario y se verifica que la contraseña coincida. LOG IN
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({username}, (err, user) => {
      if(err) return done(err);
      if(!user) return done(null, false, {message:'Incorrect username'});
      bcryptjs.compare(password, user.password, (err, res) => {
        if(res) return done(null, user);
        return done(null, false, {message: 'Incorrect password'});
      })
      return done(null, user)
    })
  })
)

//PASSPORT
app.use(session({secret:'cats', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({extended: false}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
