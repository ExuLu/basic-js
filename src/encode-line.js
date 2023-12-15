const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let encodedStr = '';
  const array = str.split('');
  array.forEach((symbol, index) => {
    let amount = 0;
    if (symbol === array[index + 1] && !encodedStr.includes(symbol)) {
      amount =
        array.filter(
          (elem, i) =>
            elem === symbol && array[i + 1] && array[i + 1] === symbol
        ).length + 1;
      encodedStr += amount + symbol;
    } else if (symbol !== array[index + 1] && symbol !== array[index - 1])
      encodedStr += symbol;
  });
  return encodedStr;
}

module.exports = {
  encodeLine,
};
