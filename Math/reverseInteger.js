'use strict';

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let result = "";
  
  if(x === 0){
    return 0;
  }else if(x > 0){
    let num = x;
    while(num > 0){
      let remainder = num % 10;
      result += remainder.toString();
      num = Math.floor(num / 10);
    }
    return parseInt(result);
    // let strToInt = parseInt(result);
    // if(strToInt < 0){
  }else if(x < 0){
    
  }

};

console.log(reverse(-123));