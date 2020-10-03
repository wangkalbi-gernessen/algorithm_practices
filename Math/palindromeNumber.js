'use strict';

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  let numStr = x.toString();
  
  if(numStr.length <= 1){
    return true;
  }else{
    if(numStr[0] === numStr[numStr.length - 1]){
      return isPalindrome(numStr.substring(1, numStr.length - 1));
    }else{
      return false;
    }
  }
};

console.log(isPalindrome(-121));