'use strict';

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
  
  /**
   * Convert to compliment
   */
  let binaryVal = num.toString(2);
  let complement = ""
  for(let i = 0; i <= binaryVal.length - 1; i++){
    if(binaryVal[i] === "0"){
      complement += 1;
    }else{
      complement += 0;
    }
  }
  
  /**
   * Convert to decimal number from complement
   */
  return parseInt(complement, 2);
  
};

console.log(findComplement(3));