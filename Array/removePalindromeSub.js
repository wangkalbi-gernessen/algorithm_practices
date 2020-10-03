'use strict';

/**
 * @param {string} s
 * @return {number}
 */
const removePalindromeSub = function(s) {
  if(s.length === 0){
    return 0;
  }else{
    if(isPalindrome(s)){
      return 1;
    }else{
      return 2;
    }
  }
};

const isPalindrome = function(str){
  if(str[0] === str[str.length - 1]){
    return isPalindrome(str.substring(1, str.length - 1));
  }else{
    return false;
  }
}

console.log(removePalindromeSub("racecar"));