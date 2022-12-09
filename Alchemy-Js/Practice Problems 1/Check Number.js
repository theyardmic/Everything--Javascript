function checkNumber(num) {
    let status = (num >= 0) ? (num === 0 ? "zero" : "positive") : "negative";
    return status;
}

module.exports = checkNumber;
