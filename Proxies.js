let auto = { Make: 'Mercedes', Model: 'E250' };

const handler = {
    get: function(obj, prop) {
         return obj[prop] ? obj[prop] :  "Property not found";
    }   
};

let car = new Proxy(auto, handler);

console.log(car.Make); // Mercedes
console.log(car.Model); // E250
console.log(car.Trim); //Not found


