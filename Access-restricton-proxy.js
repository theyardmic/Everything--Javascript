//to make objects read-only
let dC = {
    Make: "Merc",
    Model: "E-class",
    Msrp: 45000
  }
  
  const handler = {
    get: function(dC, Msrp){
      if(dC[Msrp]){
        console.log("Restricted for Sales Only");
      }
    }
  }
  
  let car = new Proxy(dC, handler);
  return car.Msrp;
console.log(car.Model);
console.log(car.Make);
