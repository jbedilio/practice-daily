var express = require('express');
var mongojs = require('mongojs');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

var databaseUrl = 'scraper';
var collections = ['scrapedData'];

var db = mongojs(databaseUrl, collections);

db.on('error', (error) => {
    console.log('db error: ', error);
});

app.get('/',  (req, res) => {
    res.send('hello world');
});

app.get('/all', (req, res) => {
    db.scrapedData.find({}, (error, found) => {
        if (error) {
            throw error;
        }
        else
            res.json(found);
    });
});

app.get('/scrape', (req, res) => {
    request('https://www.nytimes.com', (error, res, html) => {
        var $ = cheerio.load(html);
        $('h2.story-heading').each((i, element) => {
            var link = $(element).children().attr('href');
            var title = $(element).children().text();
            if (title && link) {
                db.scrapedData.insert({
                    link: link,
                    title: title
                });
            } else {
                console.log('shizz is screwed');
            }
        });
    });
});