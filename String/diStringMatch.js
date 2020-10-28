'use strict';

/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = function(S) {
  let increase = 0;
  let dicrease = S.length;
  let result = [];
  let temp = [];

  for(let i = 0; i <= S.length; i++){
    if(S[i] == "I"){
      if(temp.indexOf("I") === -1){
        temp.push("I");
        result.push(increase);
      }else{
        increase += 1;
        temp.push("I");
        result.push(increase);
      }  
    }else{
      if(temp.indexOf("D") === -1){
        temp.push("D");
        result.push(dicrease);
      }else{
        dicrease -= 1;
        temp.push("D");
        result.push(dicrease);
      }
    }
  }
  return result;
};

console.log(diStringMatch("III"));