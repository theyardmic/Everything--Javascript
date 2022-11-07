let car = { make: 'Mercedes', model: 'E250' };

const handler = {
    get: function(car, model) {
         return car[model];  //return the value of the property
    }   
};

let proxy = new Proxy(car, handler);
console.log(proxy.model); //E250
console.log(proxy.year); //undefined

