let car = { make: 'Mercedes', model: 'E250' };
let proxy = new Proxy(car, handler);

const handler = {
    get: function(car, model) {
         return car[model];  //return the value of the property
    }   
};

export {car, proxy};
console.log(proxy.model); //E250

