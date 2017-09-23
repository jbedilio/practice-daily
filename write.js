var fs = require('fs');

fs.writeFile('movies.txt', 'Inception, Die Hard', error => {


    if(error){

        return console.log(error);
        
    }

    console.log('movies.txt was updated');

});


var fs = require('fs');

fs.writeFile('movies2.txt', 'Dodgeball, Blow, The Doors', error => {

    if (error){

        console.log(shiz);

    }

    console.log('Updated the movies2.txt file cash money pimp maching');
});



var fs = require('fs');

fs.writeFile('movies3.txt', 'It, The Interview, Four Rooms', error => {

    if(error){

        console.log(wowza);

    }
    console.log('movies3.txt update cash money pimp machine');

});

var fs = require('fs');

fs.writeFile('movies.txt', 'The Interview, Four Rooms', error => {

    if(error){

        console.log(wowza);
    }
    console.log('movies.text updated cash money pimp machine');

});