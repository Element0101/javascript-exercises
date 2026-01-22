const repeatString = function(str, num) {
    let word = str;
    if (num > 0) {
        for (let i = 0; i < num - 1; i++) {
            word += str;
        }
    }else if (num < 0) {
        return "ERROR";
    }
    else{
        word = "";
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
