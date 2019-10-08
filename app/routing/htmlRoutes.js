var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.get("/survery", function(req, res) {
    if (err) throw "error1";
    res.sendFile(path.join(__dirname, "survey.html"))
})

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  