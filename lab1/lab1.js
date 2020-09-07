'use strict'

const fs = require('fs');
const randomFunctions = require('./randomFunctions');
const testFunctions = require('./testFunctions');
const constants = require('./constants');


//GENERATION RANDOM NUMBERS
const firstArr = [...Array(constants.amount)].map(() => randomFunctions.func1(constants.lambda));
const secondArr = [...Array(constants.amount)].map(() => randomFunctions.func2(constants.alpha, constants.sigma));
const thirdArr = [...Array(constants.amount)].map(() => randomFunctions.func3(constants.a, constants.c));


//TESTS
const firstTest = testFunctions.func1(firstArr, constants.lambda);
const secondTest = testFunctions.func2(secondArr, constants.alpha, constants.sigma);
const thirdTest = testFunctions.func3(thirdArr);


fs.writeFileSync(`./data/array1_lambda-${constants.lambda}.csv`, firstArr.map(item=> `${item}`).join("\n"));
fs.writeFileSync(`./data/array2_alpha-${constants.alpha}_sigma-${constants.sigma}.csv`, secondArr.map(item=> `${item}`).join("\n"));
fs.writeFileSync(`./data/array3_a-${constants.a}_c-${constants.c}.csv`, thirdArr.map(item=> `${item}`).join("\n"));


fs.writeFileSync(`./data/testFunc1_lambda-${constants.lambda}.csv`, Array.from(firstTest).map(row=> `${row[0]},${row[1]}`).join("\n"));
fs.writeFileSync(`./data/testFunc2_alpha-${constants.alpha}_sigma-${constants.sigma}.csv`, Array.from(secondTest).map(row=> `${row[0]},${row[1]}`).join("\n"));
fs.writeFileSync(`./data/testFunc3_a-${constants.a}_c-${constants.c}.csv`, `${thirdTest[0]},${thirdTest[1]}`);
