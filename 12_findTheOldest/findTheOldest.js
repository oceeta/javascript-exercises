const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const currentYear = new Date().getFullYear();
        if ("yearOfDeath" in currentPerson === false) {
            if (currentYear - currentPerson.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
                oldest = currentPerson;
            } 
        } else if ("yearOfDeath" in oldest === false) {
            if (currentYear - oldest.yearOfBirth < currentPerson.yearOfDeath - currentPerson.yearOfBirth) {
                oldest = currentPerson;
            } 
        }
        if (currentPerson.yearOfDeath - currentPerson.yearOfBirth > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = currentPerson;
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
