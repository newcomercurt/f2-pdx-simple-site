var _ = require('lodash');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app"))

var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

function findPhrase(phrase) {
  var results = {
    lectures: [],
    labs: []
  };

  // Let's start by stubbing out some functionality so we can test
  // the other parts of our code before writing the search algorithm.
  results.lectures = course.lectures;
  results.labs = course.labs;

  return results;
}

// TODO: Instead of app.get(), we want to follow the same pattern using app.post().
//       Surround the following lines of code with app.post() and make sure to
//       call your endpoint "search".

app.post('/search', function(req, res) {
  // TODO: Once you've surrounded this code with app.post(),
  //       we need to unpack our search phrase from req.body.
  //       Instead of the question marks, specify the name of the
  //       parameter that contains our search text.
  var searchText = req.body.searchText;
  var searchResults = findPhrase(searchText);
  res.json(searchResults);
});


function findPhrase(phrase) {
  var results = {
    lectures: [],
    labs: []
  };

  var notes = [];

  for (var i = 0; i < course.lectures.length; i++) {
    // TODO: Use the same code we implemented on the front end to check
    //       that we have notes and that "notes" is an array.
    if (course.lectures[i] && course.lectures[i].notes.constructor === Array) {
      for (var j = 0; j < course.lectures[i].notes.length; j++) {
        // TODO: First, check whether this notes string contains our phrase.
        // Hint: A good string method is indexOf().
        var searchWord = phrase;
        var textToSearch = course.lectures[i].notes[i];

        if (textToSearch.indexOf(searchWord) >= 0) {

        }

        if (course.lectures[i].notes[j].indexOf(phrase)) {
          notes.push(course.lectures[i].notes[j]);
        }
      }
    }
  }
  notes = searchCourseSection('lectures', phrase);
  notes.concat(searchCourseSection('labs', phrase));
  results = {
    notes: notes
  };

  // TODO: We need to do the same thing for labs that we did for
  //       lectures. Can you convert the loop into a function
  //       that accepts 2 parameters: section and phrase,
  //       and lets us search either lectures or labs?

  // Delete these 2 lines
  results.lectures = course.lectures;
  results.labs = course.labs;

  return results;
}



var course = require("./courses");

app.get('/lectures', function(req, res) {
  var lecture = _.sample(course.lectures, 1)[0];
  res.send(lecture.topic);
});

app.get('/labs', function(req, res) {
  var lab =_.sample(course.labs, 1)[0];
  res.send(lab.topic);
});

app.get('/course_name', function(req, res) {
  res.json(course.name);
});

app.listen(port, function() {
  console.log("server starting. available at http://localhost:" + port);
});
