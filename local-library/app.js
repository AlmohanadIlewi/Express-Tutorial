var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// MongoDB Atlas verbindung

// const mongodb = "mongodb+srv://mohanad.ilewi@docc.techstarter.de:<xxxxxx>@cluster0.f9jhrev.mongodb.net/local-libaray?retryWrites=true&w=majority"

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

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


// Mongoose-Verbindung einrichten
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// const mongoDB = "mongodb+srv://mohanad.ilewi@docc.techstarter.de:<AWS198351>@cluster0.f9jhrev.mongodb.net/local-libaray?retryWrites=true&w=majority";

const mongoDB = 'mongodb+srv://<mohanadilewi>:<xxxxxx>@cluster0.f9jhrev.mongodb.net/<local-library>?retryWrites=true&w=majority';

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}


/*
// Importieren des Mongoose-Moduls ......
const mongoose = require("mongoose");

// Setzen von `strictQuery: false`, um global die Filterung von Eigenschaften zu ermöglichen, die nicht im Schema vorhanden sind
// Hinzugefügt, um vorbereitende Warnungen für Mongoose 7 zu entfernen.
// Siehe: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Definieren der Datenbank-URL, zu der eine Verbindung hergestellt werden soll.
const mongoDB = "mongodb://127.0.0.1/my_database";

// Auf Verbindung zur Datenbank warten und bei Problemen einen Fehler protokollieren
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
} */