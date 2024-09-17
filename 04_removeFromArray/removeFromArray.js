const removeFromArray = function(array, itemToRemove) {
    let newArray = [];
    for (const element of array) {
        if (element === itemToRemove){
            continue;
        }
        newArray.push(element)
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
