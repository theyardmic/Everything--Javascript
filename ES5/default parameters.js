//basic default values x,y
function sum(x = 3, y = 5) {
 return x + y;
}

console.log(sum());
console.log(sum(8, 10));


//Passing default values as an expression
function _sumExp(x = 1, y = x, z = x + y) {
 return x + y + z;
 }

console.log(_sumExp());


//Passing a function Value as a default value
const f = () => 15;
function fSum(x, h = f() * x){
  return x + h;
}

console.log(fSum(10));

