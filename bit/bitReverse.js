'use strict';

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
  let binary = n.toString(2);
  let result = "";
  let splitVal = binary.split('');

  for(let i = splitVal.length-1; i >= 0; i--){
    result += splitVal[i];
  }
  let toDecimal = parseInt(result, 2);
  return toDecimal;
};

console.log(reverseBits(4294967293));