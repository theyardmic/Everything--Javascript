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

const proxy = new Proxy(car, handler); //assign proxy value to variable 

console.log(proxy.Model); // E250
console.log(proxy.Make); // Not allowed

