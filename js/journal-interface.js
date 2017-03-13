var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $("#journal").submit(function (event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var entry = new Entry(title, body);
    var wordsCount = entry.wordsCount();
    var vowelsCount = entry.vowelsCount();
    var teaser = entry.teaser();
    $("#text-output").prepend(body);
    $("#text-output").prepend("<strong>" + title + "</strong><br>");
    $("#wc-output").text(wordsCount);
    $("#vc-output").text(vowelsCount);
    $("#teaser-output").text(teaser);
  });


});
