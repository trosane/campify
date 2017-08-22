//DEPENDENCIES

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    flash = require('connect-flash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    methodOveride = require('method-override'),
    Campground = require("./models/campground"),
    Comment = require("./models/comment"),
    User = require("./models/user"),
    seedDB = require("./seeds")

// ROUTE REQUIREMENTS

var campRoutes = require("./routes/campgrounds"),
    commentRoutes = require("./routes/comments"),
    authRoutes = require("./routes/auth")

// MONGOOSE

mongoose.connect('mongodb://localhost/campify');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(methodOveride("_method"));
app.use(flash());

// seed the DB
// seedDB();

// PASSPORT CONFIG

app.use(require("express-session")( {
    secret: "Secret message",
    resave: false,
    saveUnitialize: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// ROUTES

app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campRoutes);
app.use(authRoutes);

// START SERVER

app.listen(3000, function() {
    console.log('server is connected');
});