const repeatString = function(originalString, numberOfReps) {
    let repeatedString = '';
    let loopCounter = 1;
    if (numberOfReps < 0){
        repeatedString = 'ERROR';
    }
    while (loopCounter <= numberOfReps) {
        repeatedString += originalString;
    loopCounter++;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
