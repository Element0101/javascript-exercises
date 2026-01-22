const reverseString = function(str) {
    let arr = str.split("");
    let reversedString = arr.reverse().join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
