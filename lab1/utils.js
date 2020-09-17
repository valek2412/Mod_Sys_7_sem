const testFunctions = require('./testFunctions');
const {ITEMS_AMOUNT, ALPHA, SIGMA} = require('./constants');

const intervalCounter = (arr, start, end) => arr.reduce((acc, item) => {
  if (item >= start && item <= end) return acc + 1;
  return acc;
}, 0);

const average = (arr) => {
  return arr.reduce((acc, item) => acc + item, 0) / arr.length;
};


const dispersion = (arr) => {
  const avg = average(arr);
  const sum = arr.reduce((acc, item) => acc + (item - avg) ** 2, 0);
  return sum / (arr.length - 1);
};



const histogram = (arr, amountIntervals) => {
    const resultMap = new Map();
    const intervalLength = Math.max(...arr) / amountIntervals;
    const currentInterval = {
      start: Math.min(...arr),
      end: Math.min(...arr) + intervalLength,
    };
    for (let i = 1; i <= amountIntervals; i++){
      resultMap.set(currentInterval.start, intervalCounter(arr, currentInterval.start, currentInterval.end));
      currentInterval.start += intervalLength;
      currentInterval.end += intervalLength;
    }
    return resultMap;
};


const xi = (arr, expectedArr, amountIntervals, average) => {
  let result = 0;
  const intervalLength = Math.max(...arr, ...expectedArr) / amountIntervals;
  const currentInterval = {
    start: Math.min(...arr, ...expectedArr),
    end: Math.min(...arr, ...expectedArr) + intervalLength,
  };

  for (let i = 1; i <= amountIntervals; i++) {
    let p = testFunctions.func1(currentInterval.end, average) - testFunctions.func1(currentInterval.start, average);
    const ni = intervalCounter(arr, currentInterval.start, currentInterval.end);
    result += (ni - ITEMS_AMOUNT*p) ** 2 / ITEMS_AMOUNT*p;
    currentInterval.start += intervalLength;
    currentInterval.end += intervalLength;
  }

  return result;
};



exports.average = average;
exports.dispersion = dispersion;
exports.histogram = histogram;
exports.xi = xi;