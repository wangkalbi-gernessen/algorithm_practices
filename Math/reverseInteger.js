'use strict';

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let str = [];
  let numToString = x.toString();
  for(let i = 0; i <= numToString.length - 1; i++){
    if(numToString[i] === "-"){
      continue;
    }else{
      str.push(numToString[i]);
    }
  }

  let result = [];
  for(let j = 0; j <= numToString.length - 1; j++){
    if(numToString[j] === "-"){
      result.push(numToString[j]);
    }else{
      result.push(str.pop());
    }
  }
  return result.join("");
};

console.log(reverse(-120));