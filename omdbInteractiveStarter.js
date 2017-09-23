// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...
const request = require('request');

// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv[2];
// ...

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request to the queryUrl
// ...
request(queryUrl, function(error, response, body){

    if(error){
        throw error;

    } if(response.statusCode === 200){

        var jp = JSON.parse(body)

        console.log("The release year: " + jp.Year);

        console.log("The critic rating: " + jp.Ratings[1].Value);
    }
});
  // If the request is successful
  // ...

  // Then log the Release Year for the movie
  // ...

var movieName = "";

if(process.argv.length == 2){

    console.log("Enter a freakin movie dude!");

    return;

}else{

    for(let i = 2; i < process.argv.length; i++){

        movieName += process.argv[i] + " ";
    }
};

movieName = encodeURIComponent(movieName);

console.log(movieName);

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

console.log(queryUrl);

request(queryUrl, function(error, response, body){

    if(error){
        throw error;

    }if (response.statusCode == 200){

        var jp = JSON.parse(body);

        console.log('The release year: ' + jp.Year);

        console.log('The Rotten Tomatoes Rating: ' + jp.Ratings[1].Value);

    }
});