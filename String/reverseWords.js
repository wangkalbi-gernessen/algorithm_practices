'use strict';

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  let splitWords = s.split(' ');
  let result = [];
  let str = "";
  for(let i = 0; i <= splitWords.length - 1; i++){
    for(let j = splitWords[i].length - 1; j >= 0; j--){
      str += splitWords[i][j];
    }
    result.push(str);
    str = "";
  }
  return result.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));