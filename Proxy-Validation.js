import {car} from './Proxies.js';
const handler = {
    get : function(car, model) {
        return car[model] ? car[model] : 'Not Found';
    }
}

console.log(car.make); //Not Found