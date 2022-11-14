//pop
//the pop() method removes the last element from an array and returns that element. This method changes the length of the array.
let cars = ["Mercedes", "BMW", "Toyota", "Volvo"];
let removedCar = cars.pop();
console.log(removedCar); // Volvo

//push method
//the push mehtod adds one or more elements to the end of an array and returns the new length of the array.
let updatedCars = cars.push("Genesis");
console.log(updatedCars); // 4
console.log(cars[4]); // Genesis

//foreach method
//the forEach() method executes a provided function once for each array element.
cars.forEach(car => console.log(car)); // Mercedes BMW Toyota Genesis

//find method
//the find method returns the first element that satisfies the condition
let msrp = [50000, 60000, 70000, 80000];
let expensiveCars = cars.find(e => e > 60000); // Toyota
console.log(expensiveCars);

//sort method
//the sort method sorts the array in alphabetical order
let sortedCars = cars.sort();
console.log(sortedCars); // BMW Genesis Mercedes Toyota

//filter method
//the filter method creates a new array with all elements that pass the test implemented by the provided function.
let bestName = cars.filter(car => car,length > 6);
console.log(bestName); // Mercedes Toyota

//map method
//the map method creates a new array with the results of calling a function for every array element

let newCarPrice = msrp.map(price => price * 1.1);
console.log(newCarPrice); // 55000 66000 77000 88000

//concat method
//the concat method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let oldCars = ["Ford", "Chevy", "Dodge"];
let allCars = cars.concat(oldCars);

//find index method
//the findIndex method returns the index of the first element in an array that pass a test.
let bestCar = cars.findIndex(car => car === "Mercedes");
console.log(bestCar); // 0

//splice method
//the splice method adds/removes items to/from an array, and returns the removed item(s).
let removedCars = cars.splice(1, 2);
console.log(removedCars); // BMW Toyota

