'use strict';

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  let vowels = "AIUEOaiueo"
  let vowelsArray = [];
  let result = [];
  let splitVal = s.split('');

  /**
   * make an array for only vowels
   */
  for(let i = 0; i <= splitVal.length - 1; i++){
    if(vowels.indexOf(splitVal[i]) !== -1){
      vowelsArray.push(splitVal[i]);
    }else{
      continue;
    }
  }

  for(let j = 0; j <= splitVal.length - 1; j++){
    if(vowels.indexOf(splitVal[j]) !== -1){
      result.push(vowelsArray.pop());
    }else{
      result.push(splitVal[j]);
    }
  }
  return result.join('');
};

console.log(reverseVowels("leetcode"));