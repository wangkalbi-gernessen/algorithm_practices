'use strict';

/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(n) {
  if(n === 0){
    return 0;
  }else{
    return n * trailingZeroes(n - 1);    
    
  }
};

console.log(trailingZeroes(5));