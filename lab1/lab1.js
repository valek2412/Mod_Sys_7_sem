'use strict'

const fs = require('fs');
const randomFunctions = require('./randomFunctions');
const testFunctions = require('./testFunctions');
const utils = require('./utils');
const {ITEMS_AMOUNT, INTERVALS_AMOUNT, LAMBDA, ALPHA, SIGMA, A, C} = require('./constants');


//GENERATION RANDOM NUMBERS
const firstArr = [...Array(ITEMS_AMOUNT)].map(() => randomFunctions.func1(LAMBDA));
const secondArr = [...Array(ITEMS_AMOUNT)].map(() => randomFunctions.func2(ALPHA, SIGMA));
const thirdArr = [...Array(ITEMS_AMOUNT)].map(() => randomFunctions.func3(A, C));

//CALCULATED AVERAGE
const average1 = utils.average(firstArr);
const average2 = utils.average(secondArr);
const average3 = utils.average(thirdArr);

//CALCULATED DISPERSION
const dispersion1 = utils.dispersion(firstArr);
const dispersion2 = utils.dispersion(secondArr);
const dispersion3 = utils.dispersion(thirdArr);

//EXPECTED NUMBERS
const firstExpectedArr = firstArr.map((item) => testFunctions.func1(item, average1, dispersion1));
const secondExpectedArr = firstArr.map((item) => testFunctions.func2(item, ALPHA, SIGMA));


//GENERATION HISTOGRAM DATA
const firstHistogram = utils.histogram(firstArr, INTERVALS_AMOUNT);
const secondHistogram = utils.histogram(secondArr, INTERVALS_AMOUNT);
const thirdHistogram = utils.histogram(thirdArr, INTERVALS_AMOUNT);


console.log(`Function 1`);
console.log(`Lambda: ${LAMBDA}`);
console.log(`Average: ${average1}`);
console.log(`Dispersion: ${dispersion1}`);
console.log(`Xi: ${utils.xi(firstArr, firstExpectedArr, INTERVALS_AMOUNT, average1)}`);

console.log(`\n\nFunction 2`);
console.log(`Alpha: ${ALPHA}`);
console.log(`Sigma: ${SIGMA}`);
console.log(`Average: ${average2}`);
console.log(`Dispersion: ${dispersion2}`);
//console.log(`Xi: ${utils.xi(secondArr, secondExpectedArr, INTERVALS_AMOUNT)}`);

console.log(`\n\nFunction 3`);
console.log(`a: ${A}`);
console.log(`c: ${C}`);
console.log(`Average: ${average3}`);
console.log(`Dispersion: ${dispersion3}`);


fs.writeFileSync(`./data/array1_lambda-${LAMBDA}.csv`, firstArr.map(item=> `${item}`).join("\n"));
fs.writeFileSync(`./data/array2_alpha-${ALPHA}_sigma-${SIGMA}.csv`, secondArr.map(item=> `${item}`).join("\n"));
fs.writeFileSync(`./data/array3_a-${A}_c-${C}.csv`, thirdArr.map(item=> `${item}`).join("\n"));

fs.writeFileSync(`./data/expectedArray1_lambda-${LAMBDA}.csv`, firstExpectedArr.map(item=> `${item}`).join("\n"));
fs.writeFileSync(`./data/expectedArray2_alpha-${ALPHA}_sigma-${SIGMA}.csv`, secondExpectedArr.map(item=> `${item}`).join("\n"));

fs.writeFileSync(`./data/chart1_lambda-${LAMBDA}.csv`, firstArr.map((item, index)=> `${item},${firstExpectedArr[index]}`).join("\n"));
fs.writeFileSync(`./data/chart2_alpha-${ALPHA}_sigma-${SIGMA}.csv`, secondArr.map((item, index)=> `${item},${secondExpectedArr[index]}`).join("\n"));

fs.writeFileSync(`./data/histogram1_lambda-${LAMBDA}.csv`, Array.from(firstHistogram).map(row=> `${row[0]},${row[1]}`).join("\n"));
fs.writeFileSync(`./data/histogram2_alpha-${ALPHA}_sigma-${SIGMA}.csv`, Array.from(secondHistogram).map(row=> `${row[0]},${row[1]}`).join("\n"));
fs.writeFileSync(`./data/histogram3_a-${A}_c-${C}.csv`, Array.from(thirdHistogram).map(row=> `${row[0]},${row[1]}`).join("\n"));
