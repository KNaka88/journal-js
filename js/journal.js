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
