let tokenArr = ["NFTs", "ICOs", "Stake"];
let _tokenArr = [...tokenArr, "PCards"];

console.log(tokenArr);
console.log( ...tokenArr);
console.log(..._tokenArr);

tokenArr.push("Defis");
console.log(..._tokenArr);
console.log( ...tokenArr);
