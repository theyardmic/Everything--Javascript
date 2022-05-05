// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;//using the return keyword
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));//taking the first number input
let number2 = parseFloat(prompt("Enter second number: "));//taking the second input

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);
