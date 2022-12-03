// program to generate a multiplication table up to 10

// take input from the user
let number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
  let result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

// program to generate a multiplication table up to a certain range

// take number input from the user
let number = parseInt(prompt('Enter an integer: '));

// take range input from the user
let range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
  let result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
