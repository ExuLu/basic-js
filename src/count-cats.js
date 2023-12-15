const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const cat = '^^';
  let catsAmount = 0;

  matrix.forEach((row) => {
    console.log(row);
    row.forEach((elem) => {
      if (elem === cat) catsAmount += 1;
    });
  });

  return catsAmount;
}

module.exports = {
  countCats,
};
