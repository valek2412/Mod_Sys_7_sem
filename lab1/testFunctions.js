const func1 = (arr, lambda) => {
  const mapItems = new Map();

  arr.forEach((item) => {
    mapItems.set(item, 1 - Math.E ** (-1 * lambda * item))
  });

  return mapItems;
};

const func2 = (arr, alpha, sigma) => {
  const mapItems = new Map();

  arr.forEach((item) => {
    mapItems.set(item, (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-((item - alpha) ** 2) / ((2 * sigma) ** 2)))
  });

  return mapItems;
};

const func3 = (arr) => {
  const boolArray = arr.map((item) => (item > 0) && (item < 1));
  const trueElements = boolArray.reduce((acc, item) => !!item && acc + 1, 0);

  return [trueElements, arr.length];
};


exports.func1 = func1;
exports.func2 = func2;
exports.func3 = func3;