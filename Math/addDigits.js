'use strict';

/**
 * @param {num} num
 * @return {num}
 */

const addDigits = function(num){
  let sum = 0;
  let steps = 0;
  while(num > 0){
    let remainder = num % 10;
    sum += remainder;
    num = Math.floor(num / 10);
    steps++;
  }

  if(sum < 10){
    return sum;
  }else{
    return addDigits(sum);
  }
}

console.log(addDigits(97));