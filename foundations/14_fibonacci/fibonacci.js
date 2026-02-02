const fibonacci = function(number) {
    let fiboSeq = [];
    if (number < 0) {
            return "OOPS";
        };
    for (let i = 0; i <= number; i++) {
        
         if (i <= 1) {
            fiboSeq.push(i);
        }else{
            fiboSeq.push(fiboSeq[i - 1] + fiboSeq [i - 2]);
        }
    }
    return fiboSeq[fiboSeq.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
