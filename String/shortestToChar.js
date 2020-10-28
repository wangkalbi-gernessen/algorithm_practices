'use strict';

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function(S, C) {
  let result = [];
  for(let i = 0; i <= S.length - 1; i++){
    if(S[i] === C){
      result.push(0);
    }else{
      let index = S.indexOf("e");
      let difference = index - i;
      result.push(difference);
    }
  }
  return result;
};

console.log(shortestToChar("loveleetcode", "e"));