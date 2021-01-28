/**
 * @param {number} n
 * @return {number}
 */
const numberOfMatches = function(n) {
  var matchCount = 0;
  while (n != 1) {
    if (n % 2 === 0) {
      matchCount += n / 2;
      n /= 2;
    } else {
      matchCount += Math.floor((n-1) / 2);
      n = Math.floor((n-1) / 2) + 1;
    }
  }
  return matchCount
};

console.log(numberOfMatches(14));