const sumAll = function(a, b) {
    if (a > 0 && b > 0 && typeof a === "number" && typeof b === "number"
        && Number.isInteger(a) && Number.isInteger(b)){
    let args = [a, b];
    args.sort(function(a, b) {return a - b});
    let numbers = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            numbers.push(i);
        }
    }else{
        for (let i = b; i <= a; i++) {
            numbers.push(i);
        }
    }
    return numbers.reduce((accumlator, currentValue) => accumlator + currentValue,
0);}else {
    return "ERROR";
}

};

// Do not edit below this line
module.exports = sumAll;
