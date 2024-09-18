const sumAll = function(firstNum, secondNum) {
    let result = 0;
    if (!(Number.isInteger(firstNum) && Number.isInteger(secondNum)) ||
        firstNum < 0 || secondNum < 0) {
            return 'ERROR';
    } else {
        if (firstNum > secondNum) {
            for (let i = secondNum; i <= firstNum; i++) {
                result = result + i;
            }
        } else {
            for (let i = firstNum; i <= secondNum; i++) {
                result = result + i;
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
