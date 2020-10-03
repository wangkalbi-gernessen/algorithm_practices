'use strict';

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
  let sum = num % 10 + Math.floor(num / 10);
  let answer = sum % 10 + Math.floor(sum / 10);
  return answer;
  
};

console.log(addDigits(38));