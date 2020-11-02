'use strict';

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  let count = 0;
  for(let i = 0; i <= S.length - 1; i++){
   if(J.indexOf(S[i]) !== -1){
     count += 1;
   } 
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));