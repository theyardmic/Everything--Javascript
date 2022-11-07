<<<<<<< HEAD
let car = { make: 'Mercedes', model: 'E250' };

=======
let car = { Make: 'Mercedes', Model: 'E250' };
>>>>>>> 03e8e5d1220dc7fce860b17c808a0c4b8d2129d4
const handler = {
    get: function(obj, prop) {
         return obj[prop] ? obj[prop] :  "Property not found";
    }   
};

let proxy = new Proxy(car, handler);
<<<<<<< HEAD
console.log(proxy.model); //E250
console.log(proxy.year); //undefined
=======
console.log(proxy.Make); // Mercedes
console.log(proxy.Model); // E250
console.log(proxy.Trim); //Not found
>>>>>>> 03e8e5d1220dc7fce860b17c808a0c4b8d2129d4

