
var mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/mintCardb");

var db = mongoose.connection;

db.on("error", function (error) {
    console.log("database error: ", error);
});

db.once("open", function () {
    console.log("mongoose db connected");
});

module.exports = db;