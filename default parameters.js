function sum(x = 3, y = 5) {
 return x + y;
}

console.log(sum());
console.log(sum(8, 10));



function _sumExp(x = 1, y = x, z = x + y) {
 return x + y + z;
 
}

console.log(_sumExp());


const f = () => 15;
function fSum(x, h = f() * x){
  return x + h;
}

console.log(fSum(10));

