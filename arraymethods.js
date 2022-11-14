//pop
let cars = ["Mercedes", "BMW", "Toyota", "Volvo"];
let removedCar = cars.pop();
console.log(removedCar); // Volvo

//push method
let updatedCars = cars.push("Genesis");
console.log(updatedCars); // 4
console.log(cars[4]); // Genesis

//foreach method
cars.forEach(car => console.log(car)); // Mercedes BMW Toyota Genesis

//find method
let msrp = [50000, 60000, 70000, 80000];
let expensiveCars = cars.find(e => e > 60000); // Toyota
console.log(expensiveCars);

//sort method
let sortedCars = cars.sort();
console.log(sortedCars); // BMW Genesis Mercedes Toyota

let bestName = cars.filter(car => car,length > 6);
console.log(bestName); // Mercedes Toyota

//map method
let newCarPrice = msrp.map(price => price * 1.1);
console.log(newCarPrice); // 55000 66000 77000 88000

//concat method
let oldCars = ["Ford", "Chevy", "Dodge"];
let allCars = cars.concat(oldCars);