'use strict';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
  let index = 0;
  for(let i = 0; i <= t.length - 1; i++){
    if(s[index] === t[i]){
      index+= 1;
    }
  }
  return index === s.length;
};  

console.log(isSubsequence("abc", "ahbgdc"));