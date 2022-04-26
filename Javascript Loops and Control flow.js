//Javascript Comparison and Logical Operators

//Comparison Operators
let a=5;
let b=6;

//equal to
console.log(a == b); //false

//strict equal to
console.log(a === b); //false

//not equal to
console.log(a != b);  //true

//strict not equal to
console.log(a !== b); //true

//greater than
console.log(a > b); //false

//less than
console.log(a < b); //true

//LOGICAL OPERATORS 

//Logical AND(&&)
console.log(b > a && a < b);  //true
console.log(a=b && b > a); //false

// OR operator (||)
console.log((b > a || a < b); //true,one of the conditions are true
console.log(a=b || b > a ); //true,both conditions are true

//Logical Not
console.log(a!=b); //returns false as the initial condition is true

