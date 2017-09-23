// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=it&y=2017&plot=short&apikey=40e9cece", function(error, response, body) {

  if (error) {
    throw error;
  }
  // If the request is successful (i.e. if the response status code is 200)
  if (response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    var JSONBody = JSON.parse(body);
    console.log("The movie's rating is: " + JSONBody.imdbRating);
    console.log("The movie's number of votes  is: " + JSONBody.imdbVotes);
  }
});

var request = require('request');

request('http://www.omdbapi.com/?t=The+Interview&y=&plot=short&apikey=40e9cece', (error, response, body) => {

  if(error){
    throw error;
  }

  if(response.statusCode === 200) {
    
    var jp = JSON.parse(body);

    console.log("The movie's rating is: " + jp.imdbRating);
    console.log("The movie's number of votes is: " + jp.imdbVotes);
  }
});
