 var cheerio = require('cheerio');
 var request = require('request');

console.log("\n***********************************\n" +
     "Grabbing every thread name and link\n" +
     "from reddit's webdev board:" +
     "\n***********************************\n");

request('https://www.reddit.com/r/webdev', (error, response, html) => {

var $ = cheerio.load(html);

var result = [];

 $('p.title').each((i, element) => {

    var title = $(element).text();

    var link = $(element).children().attr('href');

    results.push({
        title: title,
        link: link
    });
 });
 console.log(results);
});



var cheerio = require('cheerio');
var request = require('request');

request('https://www.reddit.com/r/webdev', (error, response, html) => {

    var $ = cheerio.load(html);

    var result = [];

    $('p.title').each((i,element) => {

        var title = $(element).text();

        var link = $(element).children().attr('href');

        results.push({
            title: title,
            link: link
        });
    });
    console.log(results);
});


var cheerio = require('cheerio');
var request = require('request');

request('https://www.reddit.com/r/webdev', (error, response, html) =>{

    var $ = cheerio.load(html);

    var result = [];

    $('p.title').each((i, element) => {

        var title = $(element).text();

        var link = $(element).children().attr('href');

        results.push({
            title: title,
            link: link
        });
    });
    console.log(results);
});

var cheerio = require('cheerio');
var request = require('request');

request('https://www.reddit.com/r/webdev', (error, response, html) => {

    var $ = cheerio.load(html);

    var result = [];

    $('p.title').each((i, element) => {

        var title = $(element).text();

        var link = $(element).children().attr('href');

        results.push({
            title: title,
            link: link
        });
    });
});

var cheerio = require('cheerio');
var request = require('request');

request('https://www.reddit.com/r/webdev', (error, response, html) => {

    var $ = Cheerio.load(html);

    var result = [];

    $('p.title').each((i, element) => {

        var title = $(element).text();

        var link = $(element).children().attr('href');

        results.push({
            title: title,
            link: link
        });
    });
});

var cheerio = require('cheerio');
var request = require('request');

request('https://www.reddit.com/r/webdev', (error, response, html) => {

    var $ = cheerio.load(html);
    
    var result = [];

    $('p.title').each((i, element) => {

        var title = $(element).text();

        var link = $(element).children().attr('href');

        results.push({
            title: title,
            link: link
        });
    });
});

var cheerio = require('cheerio');
var request = require('request');

request('https://www.reddit.com/r/webdev', (error, response, html) => {

    var $ = cheerio.load(html);

    var result = [];

    $('p.title').each((i, element) => {

        var title = $(element).text();

        var link = $(element).children().attr('href');

        results.push({
            title: title,
            link: link
        });
    });
});