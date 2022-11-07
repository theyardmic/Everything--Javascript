let car = { Make: 'Mercedes', Model: 'E250' };

let newSpec = {
     set: function(car, Trim, value) {

    car[Trim] = value;
    return;
  }
};

let _car = new Proxy(car, newSpec );
car.Trim = "Premium";

 
for (const key in car) {

    console.log(`${key}: ${car[key]}`);
}
