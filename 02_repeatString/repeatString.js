const repeatString = function(originalString, numberOfReps) {
    let repeatedString = '';
    let loopCounter = 1;
    while (loopCounter <= numberOfReps) {
        repeatedString += originalString;
    loopCounter++;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
