//Creating an array
let array_example = [5,6,"Hello World"];

//displaying array contents
console.log(array_example);

//displaying a specific array entry based on index
console.log(array_example[0]);

//adding an element at the end of the array
array_example.push("new element');
                   
//adding an array at the start
array_example.unshift("new element");

//adding an element at a specific index position
array_example[2]="third new element";

//removing the last element
array_example.pop();

//to display the removed element
let removed_element = array_example.pop();

//removing the first element
array_example.shift();

//finding the length of the array
let array_length = array_example.length;
//or
console.log(array_example.length);
