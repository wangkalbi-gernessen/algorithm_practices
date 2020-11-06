'use strict';

/**
 * @param {number} N
 * @return {number}
 */
const bitwiseComplement = function(N) {
  let binary = N.toString(2);
  let str = "";
  for(let i = 0; i <= binary.length - 1; i++){
    if(binary[i] === "0"){
      str += "1";
    }else{
      str += "0";
    }
  }
  let toDecimal = parseInt(str, 2);
  return toDecimal;
};

console.log(bitwiseComplement(7));