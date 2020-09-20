'use strict';

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
let reverseBits = function(n) {
  let result = "";
  let binary = n.toString(2)
  console.log(binary);
  for(let i = binary.length-1; i >= 0; i--){
    result += binary[i];
  }
  return result;
  
};

let powArgument = Math.pow(2, 31) -1;
console.log(powArgument);
console.log(reverseBits(powArgument));