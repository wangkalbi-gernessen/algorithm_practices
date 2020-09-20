'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s) {
  if(s.length % 2 === 1){
    return false;
  }

  let stack = [];

  for(let i = 0; i < s.length; i++){
    if(s[i] === "("){
      stack.push(")");
    }else if(s[i] === "{"){
      stack.push("}");
    }else if(s[i] === "["){
      stack.push("]");
    }else{
      let topElement = stack.pop();
      if(s[i] !== topElement){
        return false;
      }
    }
  }
  return stack.length === 0;    
};

console.log(isValid("({[]})"));