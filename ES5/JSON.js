//JSON -- JavaScript Object Notation -- is a text-based data format used to store and transfer data.

//JSON Syntax Rules
//Data is in name/value pairs
//Data is separated by commas
//Curly braces hold objects
//Square brackets hold arrays

let carSpecs = {
"Make" : "Merecedes",
"Model" : "E Class",
"Year" : 2015,
"Color" : "Black",
"Price" : {
    "Base Trim" : 50000,
    "Performance Trim" : 70000,
    "Luxury Trim" : 60000,
    "Sport Trim" : 80000
    },
"Features" : ["Leather Seats", "Heated Seats", "Sunroof"]
}

//JSON Data Types
//A JSON string must be written within double quotes
//JSON numbers cannot have commas
//JSON booleans must be lowercase
//JSON arrays must be an ordered list of values
//JSON objects must be an unordered collection of name/value pairs


//JSON.parse() -- parses a JSON string, constructing the JavaScript value or object described by the string

//Converting JSON to JavaScript Objects using JSON.parse()
let carCollection = {
    "cars": ["Mercedes", "Prado_Tx", "BMW", "Toyota", "VW"]
}

let cars = JSON.parse(carCollection);
return cars[1]; //Prado_Tx

//JSON.stringify() -- converts a JavaScript object or value to a JSON string
//Converting JavaScript Objects to JSON using JSON.stringify()

let luxuryCar = {
    "Brand" : "Mercedes",
    "Model" : "E Class", 
    "Year" : 2015,
    "Color" : "Ocean Blue",
    "Price" : 50000,
    }

let choiceCar = JSON.stringify(luxuryCar);
return choiceCar; //{"Brand":"Mercedes","Model":"E Class","Year":2015,"Color":"Ocean Blue","Price":50000}   


