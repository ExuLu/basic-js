const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  createArrayOfCodes(string) {
    const arrayOfCodes = string
      .toLowerCase()
      .split('')
      .map((letter) => this.alphabet.indexOf(letter));
    return arrayOfCodes;
  }

  addToArray(code, array, string, index, indexOfAlphabet) {
    if (code >= 0) array.push(this.alphabet[indexOfAlphabet]);
    else array.push(string[index]);
  }

  roundOfCode(code, index, array) {
    let newIndex = index;
    if (code < 0) newIndex = newIndex;
    else if (index < array.length - 1) newIndex += 1;
    else newIndex = 0;
    return newIndex;
  }

  getNewCode(array, code, index, type) {
    let newCode;
    const move = array[index];
    if (type === 'encrypt') newCode = code + move;
    if (type === 'decrypt') newCode = code - move;

    if (newCode > this.alphabet.length - 1) {
      newCode = move - (this.alphabet.length - code);
    } else if (newCode < 0) {
      newCode = this.alphabet.length - (move - code);
    }

    return newCode;
  }

  checkReverse(array) {
    if (this.reverse) {
      return array.join('').toUpperCase();
    } else {
      return array.reverse().join('').toUpperCase();
    }
  }

  encrypt(string, code) {
    if (string && code) {
      const arrWithCode = this.createArrayOfCodes(code);
      const arrWithString = this.createArrayOfCodes(string);

      let encryptedCodesString = [];
      let indexOfCodes = 0;

      arrWithString.forEach((code, index) => {
        let encryptedCode = this.getNewCode(
          arrWithCode,
          code,
          indexOfCodes,
          'encrypt'
        );

        this.addToArray(
          code,
          encryptedCodesString,
          string,
          index,
          encryptedCode
        );

        indexOfCodes = this.roundOfCode(code, indexOfCodes, arrWithCode);
      });

      return this.checkReverse(encryptedCodesString);
    } else throw new Error('Incorrect arguments!');
  }
  decrypt(string, code) {
    if (string && code) {
      const arrWithCode = this.createArrayOfCodes(code);
      const arrWithString = this.createArrayOfCodes(string);

      let decryptedCodesString = [];
      let indexOfCodes = 0;

      arrWithString.forEach((code, index) => {
        let decryptedCode = this.getNewCode(
          arrWithCode,
          code,
          indexOfCodes,
          'decrypt'
        );

        this.addToArray(
          code,
          decryptedCodesString,
          string,
          index,
          decryptedCode
        );

        indexOfCodes = this.roundOfCode(code, indexOfCodes, arrWithCode);
      });

      return this.checkReverse(decryptedCodesString);
    } else throw new Error('Incorrect arguments!');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
