'use strict';

/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = function(S) {
  let splitVal = S.split(' ');
  let vowelList = "aiueoAIUEO";
  let addChar = "a";
  let result = [];
  
  for(let i = 0; i < splitVal.length; i++){
    if(vowelList.indexOf(splitVal[i].charAt(0)) !== -1){
      result.push(splitVal[i] + "ma" + addChar.repeat(i+1)); 
    }else if(vowelList.indexOf(splitVal[i].charAt(0)) === -1){
      let splitVal2 = splitVal[i].split('');
      splitVal2.push(splitVal2.shift());
      splitVal2.push("ma" + addChar.repeat(i+1));
      result.push(splitVal2.join(""));
    }
  }
  return result.join(' ');
};

console.log(toGoatLatin("I speak Goat Latin"));