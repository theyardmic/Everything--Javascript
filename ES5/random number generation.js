//Random Number Generation

//displaying a random number without a range
let a = Math.random();
console.log(`The random number is ${a}`);

//displaying random numbers with a range of 1-10
let b = Math.random()*(10-1)+1;
console.log(`The Random Number Between 1 & 10 is ${b}`);

//Displaying Integers Between 1 & 10
let  c = Math.floor(Math.random()*(10-1))+1;
console.log(`The Random Integer Between 1 & 10 is ${c}`);

// displaying integer values between two numbers inclusive of the range from user input
// input from the user
let minValue = parseInt(prompt("Enter a min value: "));
let maxValue = parseInt(prompt("Enter a max value: "));

// generating the random number
let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
// display the random number
console.log(`Random value between ${minValue} and ${maxValue} is ${randomNumber}`);


//integer values between two numbers exclusive of the range from user input
// input from the user
let min = parseInt(prompt("Enter a min value: "));
let max = parseInt(prompt("Enter a max value: "));

// generating the random number
let randomNumber_2 = Math.floor(Math.random() * (max - min)) + min;
