// business logic
function Place(location, landmark, year, note) {
  this.location = location;
  this.landmark = landmark;
  this.year = year;
  this.note = note;
}

// user interface logic
$(function() {
  $("#new-place").submit(function(event){
    event.preventDefault();

    var inputtedLocation = $("#new-location").val();
    var inputtedLandmark = $("#new-landmark").val();
    var inputtedYear = $("#new-year").val();
    var inputtedNote = $("#new-note").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedYear, inputtedNote);

    $("#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $("#new-location").val("");
    $("#new-landmark").val("");
    $("#new-year").val("");
    $("#new-note").val("");

    $(".place").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location);
      $(".landmark").text(newPlace.landmark);
      $(".year").text(newPlace.year);
      $(".note").text(newPlace.note);
    })
  });
});
