var mongoose = require("mongoose");
var Archery = require("./models/archery");
var End = require("./models/end");
var moment = require("moment")

// var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var now = new Date()
// var dateString = now.getDate() + "-" + months[now.getMonth()] + "-" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes();

var data = [
   {
        order: moment().unix(),
        date: new Date(),
        target_type: "tri-spot", 
        scores: [10,9,10,8,6,8]
    },
    {
        order: moment().unix(),
        date: new Date(),
        target_type: "tri-spot", 
        scores: [10,10,10,5,9,8]
    },
    {
        order: moment().unix(),
        date: new Date(),
        target_type: "tri-spot", 
        scores: [10,7,8,8,10,8]
    },
    {
        order: 1427980352,
        date: new Date("04/02/2015"),
        target_type: "tri-spot", 
        scores: [10,6,8,8,10,8]
    },
    {
        order: 1452777152,
        date: new Date("01/14/2016"),
        target_type: "tri-spot", 
        scores: [10,6,8,8,5,5]
    },
    {
        order: 1450357952,
        date: new Date("12/17/2015"),
        target_type: "tri-spot", 
        scores: [10,6,10,8,10,8]
    }
    ];

function seedDB(){
    // remove all campgrounds
    Archery.remove({}, function(err){
    if(err) {
        console.log(err);
    } else {
       console.log("removed shoots");
       
    // remove all comments
    End.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("removed ends");
        }
    });
       
            // add a few new campgrounds
           data.forEach(function(seed) {
            Archery.create(seed, function(err, score) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("added score " + data.end);
                    
                    // //create ends
                    // End.create(
                    //     {
                    //         scores: data.end.scores,
                    //         endid: 1
                    //     }, function (err, x) {
                    //   if (err) {
                    //       console.log(err);
                    //   } else {
                    //       Archery.end.push(x);
                    //       Archery.save();
                    //       console.log("Created new comment");
                    //   }
                    // });
                }
                });
            });
    }
    });
    
    
}

module.exports = seedDB;