$("button").click(function() {
  var url = $(this).attr("id");
  $.get(url, function(response) {
    var resText;
    if (typeof response === "object") {
      resText = response.setup + ": " + response.punchline;
    } else {
      resText = response;
    }
    $("#show-" + url).text(resText);
  });
});

$("form").on("submit", function(event) {
  event.preventDefault();
  var form = this;
  $.get("search", {
    search: form.searchText.value
  }).success(function(results) {
    $("#search-results").empty();
    if (results.phraseFound == false) {
      alert("no results found for phrase: " + form.searchText.value)
    } else {
      displaySearchNotes(results)
    }
    console.log(results)
  })
});

function displaySearchNotes(searchResults) {
  var labs = searchResults.labs;
  var lectures = searchResults.lectures;
  if (labs.length) {
    renderMarkupForSections(labs, "Labs");
  }
  if (lectures.length) {
    renderMarkupForSections(lectures, "Lectures");
  }
};

function renderMarkupForSections(sections, sectionTitle) {
  var html = "<h1>" + sectionTitle + "</h1>"
  sections.forEach(function(section) {
    html += "<h3>" + section.topic + "</h3>";
    html += "<ul>"
    section.notes.forEach(function(note) {
      html += "<li>" + note + "</li>";
    })
    html += "</ul>";
  });
  $("#search-results").append(html);
}
