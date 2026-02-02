const palindromes = function (string) {
    let onlyAlphanumeric = string
                            .split("")
                            .filter((char) => char.match(/[A-Za-z0-9]/))
                            .map((char) => char.toLowerCase());

    const onlyAlphanumericReversed = onlyAlphanumeric.toReversed().join('');

    onlyAlphanumeric = onlyAlphanumeric.join('');

    return onlyAlphanumeric === onlyAlphanumericReversed
};

// Do not edit below this line
module.exports = palindromes;
