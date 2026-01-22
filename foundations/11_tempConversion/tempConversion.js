const convertToCelsius = function(fahrenheit) {
  let celisius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celisius * 10) / 10;

};

const convertToFahrenheit = function(celisius) {
  let fahrenheit = celisius * 1.8 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
