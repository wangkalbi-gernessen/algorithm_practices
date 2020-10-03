'use strict';

/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function(num) {
  let sum = 0;
  for(let i = 1; i < num; i++){
    if(num % i === 0){
      sum += i
    }
    else{
      continue;
    }
  }
  if(sum === num){
    return true;
  }else{
    return false;
  }
};

console.log(checkPerfectNumber(2));