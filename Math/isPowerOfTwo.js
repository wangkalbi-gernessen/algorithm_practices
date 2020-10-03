'use strict';

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
  if(n === 0){
    return false;
  }else if(n === 1){
    return true;
  }else{
    if(n % 2 === 0){
      return isPowerOfTwo(n / 2);
    }else{
      return false;
    }
  }
};

console.log(isPowerOfTwo(5));