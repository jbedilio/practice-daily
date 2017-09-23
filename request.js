// TODO Grab the request package...
// @link https://www.npmjs.com/package/request
//const request = require('request');
var request = require('request');
// Run the request function...
// The request function takes in a URL then returns three arguments:
// 1. It provides an error if one exists.
// 2. It provides a response (usually that the request was successful)
// 3. It provides the actual body text from the website <---- what actually matters.
request("https://reddit.com/r/destinythegame.json", function(error, response, body) {

  // If the request was successful...
  if (!error && response.statusCode === 200) {

    // Then log the body from the site!
    console.log(body);
  }
});

var request = require('request');

request('https://reddit.com/r/destinythegame.json', (error, response, body) => {

  if(error){
    throw error;
  }

  console.log(body);

});

var request = require('request');

request('https://reddit.com/r/destinythegame.json', (error, response, body) => {

  if(error){
    throw error;
  }

  console.log(body);

});

var request = require('request');

request('https://reddit.com/r/destinythegame.json', (error, response, body) => {

  if(error){
    throw error;
  }

  console.log(body);

});