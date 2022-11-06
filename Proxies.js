let car = { Make: 'Mercedes', Model: 'E250' };
const handler = {
    get: function(obj, prop) {
         return obj[prop] ? obj[prop] :  "Property not found";
    }   
};

let proxy = new Proxy(car, handler);
console.log(proxy.Make); // Mercedes
console.log(proxy.Model); // E250
console.log(proxy.Trim); //Not found

