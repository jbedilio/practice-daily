

//var num1 = parseFloat(process.argv[2]);
//var num2 = parseFloat(process.argv[3]);
//var add = process.argv




if (process.argv.length != 5){
    console.log('*****help*****\n' +
    'Use it like this: \n' +
    'node calculator.js add 1 2\n' +
    'node calculator.js subtract 5 2\n' +
    'node calculator.js multiply 3 2\n' +
    'node calculator.js divide 8 2\n' +
    'node calculator.js add 7 2\n');
} else {
    var op = process.argv[2],
      num1 = parseFloat(process.argv[3]),
      num2 = parseFloat(process.argv[4])
    switch (op) {
      case '+':
      case 'add':
      console.log('Added', num1 + num2);
        break;
      case '-':
      case 'subtract':
      console.log('Subtract', num1 - num2);
        break;
      case '*':
      case 'multiply':
      console.log('Multiply', num1 * num2);
        break;
      case '/':
      case 'divide':
      console.log('Divide', num1 / num2);
        break;
    };
};

console.log(num1);
console.log(num2);