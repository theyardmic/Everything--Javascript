let text1 = 'hello';
let text2 = 'world';
let text3 = '     JavaScript    ';

// adding or concatenating two strings
let result1 = text1.concat(' ', text2);
console.log(result1); // "hello world"

// converting the text to uppercase
let result2 = text1.toUpperCase();
console.log(result2); // HELLO

// removing whitespace from the string
let result3 = text3.trim();
console.log(result3); // JavaScript

//  string to array conversion
let result4 = text1.split();
console.log(result4); // ["hello"]

// slicing the string
let result5= text1.slice(1, 3);
console.log(result5); // "el"
