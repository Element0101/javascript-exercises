const palindromes = function (string) {
    let arr = string.split("");
    let cleanString = arr.filter(function(item) {
        if (/^[A-Za-z]+$/.test(item)) {
            return true;
        }
    }).join("").toLowerCase();
    
    
    if (cleanString === cleanString.split("").reverse().join("")) {
        return true;
    }else {
        return false;
    }
};
palindromes("racecar")

// Do not edit below this line
module.exports = palindromes;
