<<<<<<< HEAD
let car = { make: 'Mercedes', model: 'E250' };

const handler = {
    get: function(car, model) {
         return car[model]  ?  car[model] : "Spec Not Found";  //return the value of the property
    }   
};

const proxy = new Proxy(car, handler);
console.log(proxy.model); //E250
console.log(proxy.year); //Spec Not Found
=======
let car = { Make: 'Mercedes', Model: 'E250' };

const handler = {

    // get the object key and value
    get(obj, prop) {

    // check condition
    if (prop == 'Model') {
      return obj[prop];
    } else {
      return 'Not allowed';
    }
  }
}

const proxy = new Proxy(car, handler);

console.log(proxy.Model); // E250
console.log(proxy.Make); // Not allowed
>>>>>>> 03e8e5d1220dc7fce860b17c808a0c4b8d2129d4
