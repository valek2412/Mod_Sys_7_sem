const func1 = (item, average) => 1 - Math.E ** (-item / average);

const func2 = (item, alpha, sigma) =>
  (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-((item - alpha) ** 2) / ((2 * sigma) ** 2));



exports.func1 = func1;
exports.func2 = func2;