'use strict';

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
  let result = "";
  for(let i = 0; i <= str2.length; i++){
    if(str1.indexOf(str2[i])){
      result += str2[i];
    }else{
      continue;
    }
  }
  return result;
};

console.log(gcdOfStrings("ABCABC", "ABC"));