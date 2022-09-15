// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var path = require("path")
var db = require('./db/connection');
var session = require("express-session");
var apiRoutes = require('./routes/apiRoutes');
// Requiring passport as we've configured it
var passport = require("./passport.js");

// Compress
var compression = require('compression')


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8090;

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

// compress all responses
app.use(compression())

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main",
  //layoutsDir: path.join(__dirname, 'views')
}));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================


// Syncing our sequelize models and then starting our Express app
// =============================================================
/* { force: true } */
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
