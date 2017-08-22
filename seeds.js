var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    { 
        name: 'Salmon Creek',
        image: "http://cdn.grindtv.com/uploads/2015/02/shutterstock_242371765.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex sapien, lobortis vulputate lorem sed, tristique tincidunt dui. Vestibulum convallis quam risus, at viverra lorem egestas rhoncus. Quisque at enim dapibus, pretium justo id, eleifend sapien. Etiam ac sagittis ligula, at dictum est. Mauris justo nisi, lacinia ac cursus id, vestibulum id tellus. Nunc aliquam nisl ut lobortis vestibulum. Donec felis quam, luctus eu commodo eu, commodo tincidunt mauris. Nullam sodales tellus eget fermentum aliquet.'
    },
    { 
        name: 'Salmon River',
        image: "https://d1pk12b7bb81je.cloudfront.net/images/photos/slideshows/generated/1920/1481919252_1481919249-camingrobberscavelishanewmanslideshow.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex sapien, lobortis vulputate lorem sed, tristique tincidunt dui. Vestibulum convallis quam risus, at viverra lorem egestas rhoncus. Quisque at enim dapibus, pretium justo id, eleifend sapien. Etiam ac sagittis ligula, at dictum est. Mauris justo nisi, lacinia ac cursus id, vestibulum id tellus. Nunc aliquam nisl ut lobortis vestibulum. Donec felis quam, luctus eu commodo eu, commodo tincidunt mauris. Nullam sodales tellus eget fermentum aliquet.'
    },
    { 
        name: 'Salmon Lake',
        image: "https://www.trend-chaser.com/wp-content/uploads/sites/7/2016/11/featured-image-6.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex sapien, lobortis vulputate lorem sed, tristique tincidunt dui. Vestibulum convallis quam risus, at viverra lorem egestas rhoncus. Quisque at enim dapibus, pretium justo id, eleifend sapien. Etiam ac sagittis ligula, at dictum est. Mauris justo nisi, lacinia ac cursus id, vestibulum id tellus. Nunc aliquam nisl ut lobortis vestibulum. Donec felis quam, luctus eu commodo eu, commodo tincidunt mauris. Nullam sodales tellus eget fermentum aliquet.'
    }

]

function seedDB() {
    // remove all campgrounds
    Campground.remove({}, function(err) {
        // if(err){
        //     console.log(err);
        // }
        // console.log('removed campgrounds');
        //  // add a few campgrounds
        // data.forEach(function(seed) {
        //     Campground.create(seed, function(err, campground) {
        //         if(err) {
        //             console.log(err)
        //         } else {
        //             console.log('added campground');
        //             // create a comment
        //             Comment.create(
        //                 {
        //                     text: "Hello world.",
        //                     author: "Shakespeare"
        //                 }, function(err, comment) {
        //                     if(err) {
        //                         console/log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log('created new comment');
        //                     }
        //                 });
        //         }
        //     });
        //});
    });
    Campground.create
    // add a few comments
}

module.exports = seedDB;