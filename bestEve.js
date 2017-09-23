var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', (error, data) => {

    if(error) {
        throw error;
    }
    console.log('Data', data);
    
    dataArr = data.split(',');

    console.log(dataArr);

    for (var i = 0; i < dataArr.length; i++){
        console.log(dataArr[i]);
    };
});

var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', (shiz, biznatch) => {

    if (shiz){
        throw shiz;
    }

    console.log('biznatch', biznatch);

    biznatchArr = biznatch.split(',');

    console.log(biznatchArr);

    for(var j = 0; j < biznatchArr.length; j++){

        console.log(biznatchArr[j]);
    }
});

var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', (error, data) => {

    if(error){
        throw error;
    }
    console.log('data', data);

    dataArr = data.split(',');

    console.log(dataArr);

    for(let k = 0; k < dataArr.length; k++){

        console.log(dataArr[k]);
    }
});

var fs = require('fs');

fs.readFile('best_things_ever.txt', 'utf8', (error, data) => {

    if(error){
        throw error;
    }
    console.log('data', data);

    dataArr = data.split(',');

    console.log(dataArr);

    for (let k = 0; k < dataArr.length; k++){

        console.log(dataArr[k]);
    }
});