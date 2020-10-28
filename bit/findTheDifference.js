'use strict';

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
  let str = "";
  for(let i = 0; i <= t.length - 1; i++){
    if(t[i] !== s[i]){
      str += t[i];
    }
  }
  return str;
  
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));  
console.log(findTheDifference("a", "aa"));
