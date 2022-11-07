//for...of loop applications

//1. Iterating over an array

let Cars = ["Mercedes", "BMW", "Audi", "Toyota", "Honda"];

for(let element of Cars){
    console.log(element);
}

//2. Iterating over a string
let Sedan = "Mercedes";

for(let element of Sedan){
    console.log(i);
}

//3. Iterating over a Map
let Car = new Map();

Car.set("Mercedes", "Sedan");
Car.set("PTx", "SUV");

for(let [key, value ] of Car){
    console.log(key + " is a " + value);
}

//4. Iterating over a Set