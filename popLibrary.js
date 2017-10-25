book models

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    author: {
        type: String
    },
    title: {
        type: String
    }
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;



var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    author: {
        type: String
    },
    title: {
        type: String
    }
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    author: {
        type: String
    },
    title: {
        type: String
    }
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    author: {
        type: String
    },
    title: {
        type: String
    }
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibrarySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]
});

var Library = mongoose.model('Library', LibrarySchema);

module.exports = Library;


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibrarySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]
});

var Library = mongoose.model('Library', LibrarySchema);

module.exports = Library;


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibrarySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]
});

var Library = mongoose.model('Library', LibrarySchema);

module.exports = Library;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibrarySchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: "Book"
    }]
});

var Library = mongoose.model('Library', LibrarySchema);

module.exports = Library;

var Book = require('./models/Book.js');
var Library = require('./models/Library.js');

var exampleLibrary = new Library({
    name: "Campus Library"
});

exampleLibrary.save((error, doc) => {
    if (error){
        throw error;
    } else {
        res.send(doc);
    }
});

app.post('/submit', (req, res) => {
    var newBook = new Book(req.body);
    newBook.save((error, doc) => {
        if (error){
            throw error;
        } else {
            Library.findOneAndUpdate({}, {$push: {"books": doc._id}}, {new: true}, (error, data) => {
                if (error){
                    throw error;
                } else {
                    res.send(data);
                }
            });
        }
    });
});

app.get('/populated', (req, res) => {
    Library.find({}).populate('books').exec((error, doc) => {
        if (error){
            throw error;
        } else {
            res.send(doc);
        }
    });
});

var Book = require('./models/Book.js');
var Library = require('./models/Library.js');

var exampleLibrary = new Library({
    name: "Campus Library"
});

exampleLibrary.save((error, doc) => {
    if (error){
        throw error;
    } else {
        res.send(doc);
    }
});

app.post('/submit', (req, res) => {
    var newBook = new Book(req.body);
    newBook.save((error, doc) => {
        if (error){
            throw error;
        } else {
            Library.findOneAndUpdate({}, {$push: {'books': doc._id}}, {new: true}, (error, data) => {
                if (error) {
                    throw error;
                } else {
                    res.send(data);
                }
            });
        }
    });
});

app.get('/populated', (req, res) => {
    Library.find({}).populate('books').exec((error, doc) => {
        if (error){
            throw error;
        } else {
            res.send(doc);
        }
    });
});

var Book = require('./models/Book.js');
var Library = require('./models/Library.js');

var exampleLibrary = new Library({
    name: "Campus Library"
});

exampleLibrary.save((error, doc) => {
    if (error) {
        throw error;
    } else {
        res.send(doc);
    }
});

app.post('/submit', (req, res) => {
    var newBook = new Book(req.body);
    newBook.save((error, doc) => {
        if (error) {
            throw error;
        } else {
            Library.findOneAndUpdate({}, {$push: {'books': doc._id}}, {new: true}, (error, data) => {
                if (error) {
                    throw error;
                } else {
                    res.send(data);
                }
            });
        }
    });
});

app.get('/populated', (req, res) => {
    Library.find({}).populate('books').exec((error, doc) => {
        if (error) {
            throw error;
        } else {
            res.send(doc);
        }
    });
});

// router.get('/article/populate/:id', (req, res) => {
//     Article.find({_id: req.params.id}, (err, doc) => {
//         if (err){
//             console.log(err);
//         } else {
//             res.send(doc);
//         }
//     })
//     .populate('note').exec((error, data) => {
//         if (error){
//             console.log(error);
//         } else {
//             res.send(data);
//         }
//     });
// });

// var $note = "";
// $(document).on('submit', '#submit', function(event) {
//     event.preventDefault();
//     var thisId = $(this).attr('value');
//         // entry.body = $(this).get('textarea[name=body]').val(),
//         // entryurl = $note.attr('action');
//     $.post('/article/note/' + thisId, function(req, res) {
//         console.log(res);
//     })
//     // .done(function(data) {
//     //     console.log(data);
//     //     $('#note').empty();
//     // });
// });

// $('#submit').on('submit', (event) => {
//     event.preventDefault();
//     // $note = $('#note').text().trim();
//     $.post('/article/note/:id', (req, res) => {
//         $note.save(function(err, doc) {
//             if(err){
//                 console.log('err: ', err);
//             } else {
//                 console.log('saved note to id: ', req.params.id);
//             }
//         });
//         res.redirect('/');
//     });
// });

// $('#save').on('click', () => {
//     event.preventDefault();
//     $.post('/article/save/:id', (req, res) => {
//         if
//     })

// })