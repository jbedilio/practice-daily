//set up switch to give cases for operations
//use symbol and word in the cases for each operation -- add, subtract, multiply, divide
//the var 'op' will take the operation to be carried out on the strings

//process.argv[2] will be the operation term or the symbol

//process.argv[3] will be the first number 

//process.argv[4] will be the second number

var num1 = parseFloat(process.argv[3]);
var num2 = parseFloat(process.argv[4]);

var op = process.argv[2];


switch (op) {

    case 'add':
    case '+':
        console.log('added', num1 + num2);
            break;
    case 'subtract':
    case '-':
        console.log('subtract', num1 - num2);
            break;
    case 'multiply':
    case '*':
        console.log('multiply', num1 * num2);
            break;
    case 'divide':
    case '/':
        console.log('divide', num1 / num2);
        break;

}