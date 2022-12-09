function isEven(num) {
    let rem = num % 2;
        if (rem === 0){
            return true;
        }    
            return false;
    }
    
    module.exports = isEven;