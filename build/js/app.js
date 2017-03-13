(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordsCount = function(){
    var splitString = this.body.split(" ");
    var wordsCount = splitString.length;
    return wordsCount;
};

Entry.prototype.vowelsCount = function(){
    var lowerCaseBody = this.body.toLowerCase();
    var splitLetters = lowerCaseBody.split('');
    var vowelsCount = 0;
    var vowels = ['a','e','i','o','u'];
    splitLetters.forEach(function(letter) {
      if (vowels.includes(letter)){
        vowelsCount++;
      }
    });
    return vowelsCount;
};

Entry.prototype.teaser = function(){
    var splitString = this.body.split(" ");
    var wordsCount = splitString.length;
    var concatString = '';

    if(wordsCount > 8){
      for(var i=0; i<= 8; i++){
        concatString += splitString[i] + " ";
      }
      concatString = concatString.slice(0, -1) + "...";
    }else{
      for(var i=0; i<wordsCount; i++){
        concatString += splitString[i] + " ";
      }
    }
    return concatString;
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
