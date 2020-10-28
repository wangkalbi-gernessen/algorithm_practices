'use strict';

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  let count;
  for(let i = 0; i <= s.length - 1; i++){
    count = 0;
    for(let j = 0; j <= s.length - 1; j++){
      if(s[i] === s[j]){
        count += 1;
      }
    }
    if(count === 1){
      return s.indexOf(s[i]);
    }
  }
  return -1;
};

console.log(firstUniqChar("aabbccdef"));