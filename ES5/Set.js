let car = {
  Make: 'Mercedes', 
  Model: 'E250',
    
      };

car.getCarSpecs;

let newSpec = {
     set: function(obj, prop, value) {

    obj[prop] = value;
    return;
  }
};

let carUpdate = new Proxy(car, newSpec );
carUpdate.Trim = "Premium";
carUpdate.YOM = 2015;
carUpdate.Mileage = 0;
carUpdate.Msrp = "$45000";


for (let spec in carUpdate) {

    console.log(`${spec}: ${car[spec]}`);
}

