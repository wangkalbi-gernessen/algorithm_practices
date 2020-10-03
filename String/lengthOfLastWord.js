'use strict';

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  let count = 0;
  let splitVal = s.split(' ');
  for(let i = splitVal.length - 1; i >= 0; i--){
    if(splitVal[i] === ''){
      continue;
    }else if(splitVal[i] !== ''){
      count += splitVal[i].length
      break;
    }
  }return count; 
}

console.log(lengthOfLastWord("hello world "));