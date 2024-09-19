const convertToCelsius = function(tempFahrenheit) {
  const tempCelsius = (tempFahrenheit - 32) * (5 / 9);
  if (Number.isInteger(tempCelsius)) {
    return tempCelsius;
  } else {
    return parseFloat(tempCelsius.toFixed(1));
  }
};

const convertToFahrenheit = function(tempCelsius) {
  const tempFahrenheit = (tempCelsius * 9 / 5 + 32);
  if (Number.isInteger(tempFahrenheit)) {
    return tempFahrenheit;
  } else {
    return parseFloat(tempFahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
