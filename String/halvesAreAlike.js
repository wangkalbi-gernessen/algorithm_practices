/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = function(s) {
  s = s.toLowerCase();
  let vowels = "aiueo";
  let firstCount = 0;
  let lastCount = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      firstCount ++;
    }
  }

  for (let i = s.length / 2; i < s.length; i++) {
    if (vowels.indexOf(s[i]) !== -1) {
      lastCount ++;
    }
  }
  return firstCount === lastCount;
};

console.log(halvesAreAlike("book"));