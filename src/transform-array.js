const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (Array.isArray(arr)) {
    const newArray = new Array(arr.length);

    if (arr.length <= 1) return arr;
    else {
      for (let index = 0; index < arr.length; index++) {
        let item = arr[index];
        if (item === '--discard-prev') {
          newArray[index] = '';
          if (arr[index - 1]) newArray[index - 1] = '';
        } else if (item === '--discard-next') {
          newArray[index] = '';
          if (arr[index + 1]) {
            newArray[index + 1] = '';
            index += 1;
          }
        } else if (item === '--double-prev') {
          if (arr[index - 1]) newArray[index] = newArray[index - 1];
          else newArray[index] = '';
        } else if (item === '--double-next') {
          if (arr[index + 1]) newArray[index] = arr[index + 1];
          else newArray[index] = '';
        } else newArray[index] = arr[index];
      }

      const result = newArray.filter((item) => item !== '');
      return result;
    }
  } else throw new Error(`'arr' parameter must be an instance of the Array!`);
}

module.exports = {
  transform,
};
