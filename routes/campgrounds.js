var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//INDEX - show all campgrounds
router.get('/', function(req, res) {
    //get all campgrounds
    Campground.find({}, function(err, allCampgrounds) {
        if(err){
            console.log(err);
        } else {
            res.render('campgrounds/index', { campgrounds:allCampgrounds, currentUser: req.user });
        }
    });
});

//CREATE - add new campground to DB
router.post('/', middleware.isLoggedIn, function(req, res) {
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.desc;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    //get data from form and add to campgrounds array
    var newCamp = { name: name, price: price, image: image, description: desc, author: author }
    //create a new campground and save to database
    Campground.create(newCamp, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
           res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create campground
router.get('/new', middleware.isLoggedIn, function(req, res) {
    res.render('campgrounds/new');
});

//SHOW - show an individual campground
router.get('/:id', function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds/show", { campground: foundCampground });
        }
    });
});

// EDIT
router.get("/:id/edit", middleware.checkCampOwner, function(req, res) {
        Campground.findById(req.params.id, function(err, foundCamp) {
            if(err) {
                req.flash("error", "Edit error.");
            } else {
                res.render("campgrounds/edit", { campground: foundCamp });
            }
        });
});

// UPDATE

router.put("/:id", middleware.checkCampOwner, function(req, res) {
    //find and update campground
        Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCamp) {
            if(err) {
                res.redirect("/campgrounds");
            } else {
                res.redirect("/campgrounds/" + req.params.id);
            }
        });

});

// DESTROY

router.delete("/:id", middleware.checkCampOwner, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;