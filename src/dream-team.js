const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (members && members.length) {
    const cleanMembers = members.filter((member) => typeof member === 'string');
    if (cleanMembers.length > 0) {
      const team = cleanMembers
        .map((member) => member.trim())
        .map((member) => member.toUpperCase())
        .map((member) => member[0])
        .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
        .join('');
      return team;
    } else return false;
  } else return false;
}

module.exports = {
  createDreamTeam,
};
