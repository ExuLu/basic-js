const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let commons = [];
  const firstArray = s1.split('');
  const secondArray = s2.split('');

  firstArray.forEach((elemFirst) => {
    for (let i = 0; i < secondArray.length; i++) {
      let elemSecond = secondArray[i];
      if (elemFirst === elemSecond) {
        commons.push(elemFirst);
        break;
      }
    }
  });

  const uniqueCommons = new Set(commons);
  return Array.from(uniqueCommons).length;
}

module.exports = {
  getCommonCharacterCount,
};
