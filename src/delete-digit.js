const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let max = 0;
  const array = n.toString().split('');
  array.forEach((digit, index) => {
    let numWithoutDigit = Number(
      array
        .filter((elem, i) => {
          if (elem === digit && index === i) return '';
          else return elem;
        })
        .join('')
    );
    if (numWithoutDigit > max) max = numWithoutDigit;
  });
  return max;
}

module.exports = {
  deleteDigit,
};
