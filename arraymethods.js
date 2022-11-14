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