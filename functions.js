function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {
  var triangle = "";
  var lineNumber = 1;
  for (lineNumber = 1; lineNumber <= length; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
console.log(buildTriangle(10));

var catSays = function (max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
console.log(catSays(10));

function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
