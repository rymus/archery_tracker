var mongoose = require("mongoose");

var endSchema = new mongoose.Schema({
    scores: [],
    endid: String
});

module.exports = mongoose.model("End", endSchema);