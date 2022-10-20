function sum(x = 3, y = 5) {
 return x + y;
}

console.log(sum());
console.log(sum(8, 10));



function _sumExp(x = 1, y = x, z = x + y) {
  console.log(y);
  console.log(z);
}

const f = () => 15;
function fSum(f, h = f*y){
  _fsum = f + h;
}

console.log(h);
console.log(fSum(10));
