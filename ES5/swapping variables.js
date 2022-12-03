//JavaScript program to swap two variables

//Using a temporary variable
//take input from the users
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
 
//Using opêrators
//JavaScript program to swap two variables

//take input from the users
let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));

// addition and subtraction operator
a = a + b;
b = a - b;
a = a - b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);
