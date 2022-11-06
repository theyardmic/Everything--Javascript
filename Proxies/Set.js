let car = { Make: 'Mercedes', Model: 'E250' };

let newSpec = {
     set: function(car, Trim, value) {

    car[Trim] = value;
    return;
  }
};

let _car = new Proxy(car, newSpec );
car.Trim = "Premium";

console.log(car); //{ Make: 'Mercedes', Model: 'E250', Trim: 'Premium' }
