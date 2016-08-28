var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Archery     = require("./models/archery"),
    End         = require("./models/end"),
    seedDB      = require("./seeds"),
    moment      = require("moment")

//seedDB();

mongoose.connect("mongodb://db/archery_scores");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+ "/public"));

// MongoDB schema
// var archerySchema = new mongoose.Schema({
//     end: Number,
//     target_type: String,
//     scores: []
// });

// var Archery = mongoose.model("Archery", archerySchema);

// routes

app.get("/", function(req, res) {
    Archery.find({}).sort({order: -1}).exec(function(err, allarchery) {
       if(err) {
           console.log(err);
       } else {
           res.render("index", {archery: allarchery});
       }
    });
});

app.get("/entry", function(req, res) {
    res.render("entry");
});



app.post("/entry", function(req, res) {
    
    var scores = req.body.arrows;
    console.log(scores); // DEBUGGING
    var test = scores.split(',');
    var targetType = req.body.targetType;
    var newArchery = {order: moment().unix(), target_type: targetType, scores: test, date: new Date()}
    Archery.create(newArchery, function(err, complete) {
       if(err) {
           console.log(err);
       } else {
           res.redirect("/entry");
       }
    });
});



// Filter by date. 
//  regex string - db.archeries.find({"date": /.*Mon Mar 21 2016 16:15:03.*/})

// db.archeries.find({ "order" : {$regex: /14593391/ }})
app.get("/filter/:ord", function(req, res) {
   var srchStr = req.params.ord.toString().slice(0,5)
   console.log(srchStr) //DEBUGGING
   Archery.find({"order" : { $regex: srchStr}}).sort({order: -1}).exec(function(err, archery) {
      if(err) {
          console.log(err)
      } else {
          res.render("filter", {filtarchery: archery});
      }
   });
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("server started");
});
