var express = require("express");
var app = express();
var path = require("path");

app.get("/", function(req,res) {
    if (err) throw err;
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

module.exports = function(app) {
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/survey.html", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })
};