'use strict';

/**
 * @param {string} s
 * @return {number}
 */


const balancedStringSplit = function(s) {
  let result = 0;
  let balanced = 0;
  for(let i = 0; i < s.length; i++){
    const str = s[i];
    if(str === "R"){
      balanced += 1;
    }else if(str === "L"){
      balanced -= 1;
    }

    if(balanced === 0){
      result ++;
    }
  }
  return result;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
