"use strict";

const inputTemp = document.querySelector("#inputTemp");
const outputTemp = document.querySelector("#outputTemp");
const selectInputTemp = document.querySelector("#selectInputTemp");
const selectOutputTemp = document.querySelector("#selectOutputTemp");
const btnReset = document.querySelector("#btnReset");

const convert = (input) => {
  const selectedInput = selectInputTemp.value;
  const selectedOutput = selectOutputTemp.value;

  // Celcius
  if (selectedInput == 1) {
    if (selectedOutput == 1) {
      outputTemp.value = input;
    }
    if (selectedOutput == 2) {
      outputTemp.value = celciusToKelvin(input);
    }
    if (selectedOutput == 3) {
      outputTemp.value = celciusToFahrenheit(input);
    }
  }

  // Kelvin
  if (selectedInput == 2) {
    if (selectedOutput == 1) {
      outputTemp.value = celciusToKelvin(input, true);
    }
    if (selectedOutput == 2) {
      outputTemp.value = input;
    }
    if (selectedOutput == 3) {
      outputTemp.value = kelvinToFahrenheit(input);
    }
  }

  // Fahrenheit
  if (selectedInput == 3) {
    if (selectedOutput == 1) {
      outputTemp.value = celciusToFahrenheit(input, true);
    }
    if (selectedOutput == 2) {
      outputTemp.value = kelvinToFahrenheit(input, true);
    }
    if (selectedOutput == 3) {
      outputTemp.value = input;
    }
  }
};

const celciusToKelvin = (value, reverse = null) =>
  reverse ? Number(value) * -272.15 : Number(value) * 274.15;

const celciusToFahrenheit = (value, reverse = null) =>
  reverse ? Number(value) * -17.222222222 : Number(value) * 33.8;

const kelvinToFahrenheit = (value, reverse = null) =>
  reverse ? Number(value) * 255.92777778 : Number(value) * -457.87;

const clearInput = () => {
  inputTemp.value = "";
  outputTemp.value = "";
};

// Event while typing on the input box
inputTemp.addEventListener("keyup", function (e) {
  convert(e.target.value);
});

// Event when select changes
selectInputTemp.addEventListener("change", function () {
  convert(inputTemp.value);
});

selectOutputTemp.addEventListener("change", function () {
  convert(inputTemp.value);
});

// Event when button reset
btnReset.addEventListener("click", function () {
  clearInput();
});
