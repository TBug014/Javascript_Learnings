'use strict';


// problem 1
const temperatures = [3, -2, -6, -100, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// problem 2
const temperaturesNew = [3, -2, -6, -100, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1, 6], [9, 0, 5, 7]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    Uint: 'celcius',
    value: Number(prompt('Degrees celcius:')),
  };
  console.table(measurement);

  // console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

//Coding Challenge
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(
  `...${data1[0]} degree celcius...${data1[1]} degree celcius...${data1[2]} degree celcius...`
);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} degree celcius in ${i + 1} days... `;
  }
  console.log('...' + str);
};
printForecast(data1);
