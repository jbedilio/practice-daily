const request = require('request');

var movie = "";

if(process.argv.length == 2){

    console.log("enter that shiz!");

    return;

}else{

    for(let i = 2; i < process.argv.length; i++){

        movie += process.argv[i] + " ";

    }

    movie = encodeURIComponent(movie);
    
    console.log(movie)

}

var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

console.log(queryUrl);

request(queryUrl, (error, response, body) => {

    if(error){
        throw error;

    }if (response.statusCode == 200){

        var jp = JSON.parse(body);

        console.log('The release year: ' + jp.Year);

        console.log('The Rotten Tomatoes rating: ' + jp.Ratings[1].Value);

    }

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var movie = "";

if(process.argv.length == 2){

    console.log("Enter that shiz bro!");

    return;

}else{

    for (let i = 2; i < process.argv.length; i++){

        movie += process.argv[i] + " ";
    }

    movie = encodeURIComponent(movie);

    console.log(movie);

}

console.log(queryUrl);

request(queryUrl, (error, response, body) => {

    if(error) {
        throw error;

    }if(response.statusCode == 200){
        
        var jp = JSON.parse(body);

        console.log('The release year: ' + jp.Year);

        console.log('The Rotten Tomatoes Rating: ' + jp.Ratings[1].Value);

    }
});