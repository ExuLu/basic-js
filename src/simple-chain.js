const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainLinks: [],

  getLength() {
    return this.chainLinks.length;
  },
  addLink(value) {
    const chainLink = `( ${String(value)} )`;
    this.chainLinks.push({ chainLink });

    return this;
  },
  removeLink(position) {
    try {
      if (
        position > 0 &&
        this.chainLinks[position - 1] &&
        typeof position === 'number'
      ) {
        const newArray = this.chainLinks.filter(
          (_, index) => index !== position - 1
        );
        this.chainLinks = [...newArray];
        return this;
      } else throw new Error("You can't remove incorrect link!");
    } catch (err) {
      console.error(err);
    }
  },
  reverseChain() {
    const newArray = this.chainLinks.reverse();
    this.chainLinks = [...newArray];

    return this;
  },
  finishChain() {
    const result = this.chainLinks.map((link) => link.chainLink).join('~~');
    try {
      throw new Error();
    } catch (err) {
      this.chainLinks = [];
    } finally {
      return result;
    }
  },
};

module.exports = {
  chainMaker,
};
