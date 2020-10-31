'use strict';

/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function(num) {
  if(num === 0){
    return false;
  }else if(num === 1){
    return true;
  }else{
    if(num % 4 === 0){
      return isPowerOfFour(num / 4);
    }else{
      return false;
    }
  }
};

console.log(isPowerOfFour(8));