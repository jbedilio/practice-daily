var express = require('express');
var mongojs = require('mongojs');

var app = express();

var databaseUrl = 'zoodb';
var collections = ['animals'];

var db = mongojs(databaseUrl, collections);

db.on('error', (error) =>{
    console.log('database error', error);
});


app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/all', (req, res) => {
    db.animals.find({}, (err, data) => {
        if (error) {
            console.log(error);
        }
        else {
            res.json(data);
        }
    });
});

app.get('/all/name', (req, res) => {
    db.animals.find().sort({name:1}, (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            res.json(data);
        }
    });
});

app.get('/all/weight', (req, res) => {
    db.animals.find().sort({weight:-1}, (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            res.json(data);
        }
    });
});

var databaseUrl = 'zoodb';
var collections = ['animals'];

var db = mongojs(databaseUrl, collections);

db.on('error', (error) => {
    console.log('db error', error);
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/all', (req, res) => {
    db.animals.find({}, (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            res.json(data);
        }
    });
});

app.get('/all/name', (req, res) => {
    db.animals.find().sort({name:1}, (error, data) => {
        if (error) {
            throw error;
        }
        else {
            res.json(data);
        }
    });
});

app.get('/all/weight', (req, res) => {
    db.animals.find().sort({weight:-1}, (error, data) => {
        if (error) {
            throw error;
        }
        else {
            res.json(data);
        }
    });
});

var databaseUrl = 'zoodb';
var collections = ['animals'];

var db = mongojs(databaseUrl, collections);

db.on('error', (error) => {
    console.log(error);
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/all', (req, res) => {
    db.animals.find({}, (error, data) => {
        if (error) {
            throw error;
        }
        else {
            res.json(data);
        }
    });
});

app.get('/all/name', (req, res) => {
    db.animals.find().sort({name:1}, (error, data) => {
        if (error) {
            throw error;
        }
        else {
            res.json(data);
        }
    });
});

app.get('/all/weight', (req, res) => {
    db.animals.find().sort({weight:-1}, (error, data) => {
        if (error) {
            throw error;
        }
        else {
            res.json(data);
        }
    });
});