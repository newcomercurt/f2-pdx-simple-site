var _ = require('lodash');
var express = require('express');
var bodyparser = require("body-parser");

var port = process.env.PORT || 3000;
var app = express();

var course = require("./courses");
var findPhrases = require('./find-phrases');

app.use(express.static(__dirname + "/app"))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.get('/search', function(req, res) {
    var searchText = req.query.search;
    var searchResults = findPhrases(course, searchText);
    res.json(searchResults);
});

app.get('/lectures', function(req, res) {
    var lecture = _.sample(course.lectures, 1)[0];
    res.send(lecture.topic);
});

app.get('/labs', function(req, res) {
    var lab = _.sample(course.labs, 1)[0];
    res.send(lab.topic);
});

app.get('/course_name', function(req, res) {
    res.json(course.name);
});

app.listen(port, function() {
    console.log("server starting. available at http://localhost:" + port);
});
