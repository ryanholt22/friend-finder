var express = require("express");
var app = express();
var path = require("path");


app.get("/api/friends", function(req, res) {
    if (err) throw (err);
})

module.exports = function(app) {
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })
};