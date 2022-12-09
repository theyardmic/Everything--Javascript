function maxSum(num) {
    let total = 0;
    for(i = 1; i <= num; i++){
         total += i; 
    }
    return total;
}

module.exports = maxSum;