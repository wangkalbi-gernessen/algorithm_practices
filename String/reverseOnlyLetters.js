'use strict';

/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = function(S) {
  /**
   * make an array for only alphabet
   */
  let alphabetArray = [];
  let result = [];
  let splitVal = S.split('');
  for(let i = 0; i <= splitVal.length - 1; i++){
    if(splitVal[i].match(/[a-zA-Z]/)){
      alphabetArray.push(splitVal[i]);
    }else{
      continue;
    }
  }

  /**
   * make a reversed array including hyphen
   */
  for(let j = 0; j <= splitVal.length - 1; j++){
    if(splitVal[j].match(/[a-zA-Z]/)){
      result.push(alphabetArray.pop());
    }else{
      result.push(splitVal[j]);
    }
  }
  return result.join('');
};

console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));