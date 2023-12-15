const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (domains.length > 0) {
    let amount;
    let result = {};
    domains.forEach((domain) => {
      amount = 0;
      domains.forEach((dom) => {
        if (dom.includes(domain)) amount += 1;
      });
      const domainName = `.${domain.split('.').reverse().join('.')}`;
      result[domainName] = amount;
    });
    let lastDomain;
    if (domains[0].length > 1) {
      lastDomain = `.${
        domains[0].split('.')[domains[0].split('.').length - 1]
      }`;
    } else lastDomain = domains.split('.')[domains.split('.').length - 1];
    amount = 0;
    domains.forEach((dom) => {
      if (dom.includes(lastDomain)) amount += 1;
    });
    result[lastDomain] = amount;
    return result;
  } else {
    return {};
  }
}

module.exports = {
  getDNSStats,
};
