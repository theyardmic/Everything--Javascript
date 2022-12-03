//to make objects read-only
let dC = {
  Make: "Merc",
  Model: "E-class",
  Msrp: 45000
}

const handler = {
  set: function(obj, prop){
    if(obj[prop]){
      console.log("Restricted for Admins Only");
    }
  }
}

let car = new Proxy(dC, handler);

car.Make = "BMW"; //Restricted for Admins Only
car.Model = "M-Series"; //Restricted for Admins Only