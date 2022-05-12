//integer values between two numbers inclusive of the range from user input

// input from the user
let min = parseInt(prompt("Enter a min value: "));
let max = parseInt(prompt("Enter a max value: "));

// generating the random number
let a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);


//integer values between two numbers exclusive of the range from user input
// input from the user
let min = parseInt(prompt("Enter a min value: "));
let max = parseInt(prompt("Enter a max value: "));

// generating the random number
let a = Math.floor(Math.random() * (max - min)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`);
