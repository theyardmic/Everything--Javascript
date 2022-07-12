//normal way of access
/* let car = {
model: "Mercedes";
year: 2015;
mileage: 0;
{  
console.log(car.model);
*/


//access through destructuring without using this keyword
let car = {
model: "Mercedes",
year: 2015,
mileage: 0,
};
 let { model,year,mileage} = car;  //destructuring
console.log(car.model);
