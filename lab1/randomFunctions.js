const func1 = (lambda) => -1 / lambda * Math.log(Math.random());

const func2 = (alpha, sigma) => {
  const mu =
    [...Array(12)]
      .map(() => Math.random())
      .reduce((acc, item) => acc + item, 0) - 6;

  return sigma * mu + alpha;
};

const func3Closure = () => {
  let z = Math.random();
  return (a, c) => {
    z = a * z % c;
    return z / c;
  }
};
const func3 = func3Closure();

exports.func1 = func1;
exports.func2 = func2;
exports.func3 = func3;