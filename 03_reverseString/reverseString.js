const reverseString = function(originalString) {
    let repeatedString = "";
    for (let i = originalString.length - 1; i >= 0 ; i--) {
        repeatedString += originalString[i];
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = reverseString;
