const removeFromArray = function(arr, ...otherArgs) {
    let modifiedArr = [];
    otherArgs.forEach(function(item) {
        for (let i = 0; i < arr.length; i++) {
            while (item === arr[i]) {
                arr.splice(i, 1);
            }
        }
        });
        
        return arr;
        }
    
    
    
    


// Do not edit below this line
module.exports = removeFromArray;
