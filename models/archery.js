var mongoose = require("mongoose");

var archerySchema = new mongoose.Schema({
    order: String,
    date: String,
    target_type: String,
    scores: []
});

module.exports = mongoose.model("Archery", archerySchema);