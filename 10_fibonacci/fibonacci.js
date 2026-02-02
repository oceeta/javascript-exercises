const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    } else if (n == 0) {
        return 0
    } else if (n == 1 || n === 2) {
        return 1
    } else {
        let count = 2;
        let currentFib = 0;
        let previousFib = 1;
        let secondPreviousFib = 0;
        while (count <= n) {
            currentFib = previousFib + secondPreviousFib;
            secondPreviousFib = previousFib;
            previousFib = currentFib;
            count++;
        }
        return currentFib;
    }
};

// Do not edit below this line
module.exports = fibonacci;
