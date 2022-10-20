function sum(x = 3, y = 5) {
  _sum = x+y;
}

console.log(8, 10);
console.log((_sum));
console.log(_sum(10));


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
