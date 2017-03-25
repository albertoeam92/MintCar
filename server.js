var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var logger = require("morgan");
var port = process.env.PORT || 3000;
var api = require('./api/routes/routes');


app.use(express.static(__dirname + "/app"));

app.use(logger("dev"));

app.listen(port, function() {
    console.log("listening on port:" + port);
});
