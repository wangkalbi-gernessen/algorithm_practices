'use strict';

/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function(A) {

  let result = []
  for(let i = 0; i <= A.length - 1; i++){
    let splitVal = A[i].split('');
    for(let j = 0; j <= splitVal[j].length - 1; j++){
      if(result.indexOf(splitVal[j]) !== -1){
        result.replace(splitVal[j], ' ');
      }
    }
  }
  return result;
};

console.log(commonChars(["bella","label","roller"]));