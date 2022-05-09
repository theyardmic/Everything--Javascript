// JavaScript program to find the area of a triangle with three sides

let side1 = parseInt(prompt('Enter side1: '));
let side2 = parseInt(prompt('Enter side2: '));
let side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
let s = (side1 + side2 + side3) / 2;

//calculate the area
let areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);

// JavaScript program to find the area of a triangle with base and height
let baseValue = prompt('Enter the base of a triangle: ');
let heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
let areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);
