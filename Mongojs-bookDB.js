var express = require('express');
var bp = require('body-parser');
var logger = require('morgan');
var mongojs = require('mongojs');

var app = express();

app.use(logger('dev'));
app.use(bp.urlencoded({extended: true}));

app.use(express.static('public'));

var databaseUrl = 'booktracker';
var collections = ['books'];
var db = mongojs(databaseUrl, collections);

db.on('error', (error) => {
    console.log('db error: ', error);
});

app.post('/submit', (req, res) => {
    var book = req.body;
    book.read = false;
    db.books.save(book, (error, save) => {
        if (error) {
            throw error;
        }
        else {
            res.send(save); //res.json(save);
        }
    });
});

app.get('/read', (req, res) => {
    db.books.find({'read': true}, (error, found) => {
        if (error) {
            throw error;
        }
        else {
            res.json(found);
        }
    });
});

app.get('/unread', (req, res) => {
    db.books.find({'read': false}, (error, data) => {
        if (error) {
            throw error;
        }
        else {
            res.json(data);
        }
    });
});

app.get('/markread/:id', (req, res) => {
    db.books.update({_id: mongojs.ObjectId(req.params.id)}, {$set: {'read': true}}, (error, data) => {
        if (error) {
            throw error;
        }
        else {
            res.json(data);
        }
    });
});

app.get('/markunread/:id', (req, res) => {
    db.books.update({_id: mongojs.ObjectId(req.params.id)}, {$set: {'read': false}}, (error, data) => {
        if (error) {
            throw error;
        }
        else {
            res.json(data);
        }
    });
});

app.listen(3000, () => {
    console.log('app listening on port 3000!')
});