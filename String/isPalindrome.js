'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  let sLower = s.toLowerCase();
  if(sLower.length <= 1){
    return true;
  }else{
    if(sLower[0] === sLower[sLower.length - 1]){
      return isPalindrome(sLower.substring(1, sLower.length - 1));
    }else{
      return false;
    }
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));