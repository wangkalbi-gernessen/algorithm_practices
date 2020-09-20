'use strict';

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

let hammingWeight = function(n) {
  let result = n.toString(2);
    let count = 0;
    for(let i =0; i < result.length; i++){
      if(result[i].includes(1)){
        count += 1;
      }
    }  
  return count;
};

console.log(hammingWeight(53201));