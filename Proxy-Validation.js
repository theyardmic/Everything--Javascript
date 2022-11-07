let car = { make: 'Mercedes', model: 'E250' };

const handler = {
    get: function(car, model) {
         return car[model]  ?  car[model] : "Spec Not Found";  //return the value of the property
    }   
};

const proxy = new Proxy(car, handler);
console.log(proxy.model); //E250
console.log(proxy.year); //Spec Not Found
