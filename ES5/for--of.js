                    //For of loop
                    
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
Car.set("Prado_Tx", "SUV");

for(let [key, value ] of Car){
    console.log(key + " is a " + value);
}

//4. Iterating over a Set
let carBrand = new Set();

carBrand.add("Mercedes");
carBrand.add("Tx");
carBrand.add("Audi");
carBrand.add("Toyota");
carBrand.add("Honda");

for(let c of carBrand){
console.log(c);
}

//5. Iterating over a generator
function* carGenerator(){
    yield "Mercedes";
    yield "BMW";
    yield "Audi";
    yield "Toyota";
    yield "Honda";
}

let carCollection = carGenerator();

for(let value of carCollection){
    console.log(value);
}