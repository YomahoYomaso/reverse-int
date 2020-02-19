module.exports = function reverse (n) {
    var number = Math.abs(n).toString();
    number = number.split("").reverse().join("");
    return parseInt(number);
}
