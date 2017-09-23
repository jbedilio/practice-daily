// fs is a core Node package for reading and writing files
var fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"

fs.readFile("movies.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    throw error;
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});


var fs = require('fs');

fs.readFile('movies.txt', 'utf8', (error, shiz) => {

    if(error) {
        throw error;
    }

    console.log(shiz);

    var shizArr = shiz.split(',');

    console.log(shizArr);

});


var fs = require('fs');

fs.readFile('movies.txt', 'utf8', (shiz, biznatch) => {

    if (shiz) {
        throw shiz;
    }

    console.log(biznatch);

    var biznatchArr = biznatch.split(',');

    console.log(biznatchArr);

});

var fs = require('fs');

fs.readFile('movies.txt', 'utf8', (error, data) => {

    if (error){
        throw error;
    }

    console.log(data);

    var dataArr = data.split(',');

    console.log(dataArr);
})

var fs = require('fs');

fs.readFile('movies.txt', 'utf8', (error, data) => {

    if(error){
        throw error;
    }

    console.log(data);

    var dataArr = data.split(',');

    console.log(dataArr);
});