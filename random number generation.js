//Random Number Generation

//displaying a random number without a range
let a = Math.random();
console.log(`The random number is ${a}`);

//displaying random numbers with a range of 1-10
let a = Math.random()*(10-1)+1;
console.log(`The Random Number Between 1 & 10 is ${a}`);

//Displaying Integers Between 1 & 10
let a= Math.floor(Math.random()*(10-1))+1;
console.log(`The Random Integer Between 1 & 10 is ${a}`);

// displaying integer values between two numbers inclusive of the range from user input
// input from the user
let min = parseInt(prompt("Enter a min value: "));
let max = parseInt(prompt("Enter a max value: "));

// generating the random number
let a = Math.floor(Math.random() * (max - min + 1)) + min;
// display the random number
console.log(`Random value between ${min} and ${max} is ${a}`);


//integer values between two numbers exclusive of the range from user input
// input from the user
let min = parseInt(prompt("Enter a min value: "));
let max = parseInt(prompt("Enter a max value: "));

// generating the random number
let a = Math.floor(Math.random() * (max - min)) + min;
