// create Set
const set1 = new Set(); // an empty set
console.log(set1); // Set {}

// Set with multiple types of value
const set2 = new Set([1, 'hello', {count : true}]);
console.log(set2); // Set {1, "hello", {count: true}}

//Accessing Set Elements

const set1 = new Set([1, 2, 3]);

// access the elements of a Set
console.log(set1.values()); // Set Iterator [1, 2, 3]
