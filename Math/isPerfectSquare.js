'use strict';

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  let sqrtNum = Math.sqrt(num);
  if(sqrtNum - Math.floor(sqrtNum) === 0){
    return true;
  }else{
    return false;
  }
};

console.log(isPerfectSquare(14));