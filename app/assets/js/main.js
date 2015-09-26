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
  $.get("search", {
    search: this.searchText.value
  }).success(function(results) {
    console.log(results)
  })
});
