                                //"this". keyword

//This keyword is used to refer to the current object, function, or variable.

//1.to refer to the current object
let car = {
    "Brand" : "Mercedes",
    "Model" : "E Class",
    "Year" : 2015,


     getSpecs() {
        console.log(this);  // this refers to the object itself     
        console.log(this.Model); // object property
    }
}

car.getSpecs();

         //2.to refer to the current function
function setSpecs() {
        this.Color = "Pearl White";
           }

let newSpec = new setSpecs();
console.log(Color); //Pearl White

        //3.to refer to the current object in a constructor function
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let bestSedan = new Car("Mercedes", "E Class", 2015);
console.log(bestSedan)