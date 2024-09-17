const removeFromArray = function(array, firstItem, secondItem = null) {
    let newArray = [];
    for (const element of array) {
        if (element === firstItem || element === secondItem){
            continue;
        }
        newArray.push(element)
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
