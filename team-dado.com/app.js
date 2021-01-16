var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var businessRouter = require('./routes/business');
var reservationRouter = require('./routes/reservation');
var communityRouter = require('./routes/community');
var site4Router = require('./routes/site4');
var site5Router = require('./routes/site5');
var site6Router = require('./routes/site6');
var site7Router = require('./routes/site7');
var site8Router = require('./routes/site8');
var site9Router = require('./routes/site9');
var site10Router = require('./routes/site10');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Business', businessRouter);
app.use('/reservation', reservationRouter);
app.use('/community', communityRouter);
app.use('/site4', site4Router);
app.use('/site5', site5Router);
app.use('/site6', site6Router);
app.use('/site7', site7Router);
app.use('/site8', site8Router);
app.use('/site9', site9Router);
app.use('/site10', site10Router);


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
