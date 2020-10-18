'use strict';

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function(left, right) {
  let arr = [];
  for(let start = left; start <= right; start++){
    if(selfDividingNumbersHelper(start)){
      arr.push(start);
    }
  }
  return arr;
};

/**
 * 
 * @param {*} num 
 * Check if num is self-dividing number
 */
const selfDividingNumbersHelper = function(num){
  if(num >= 1 && num <= 9){
    return true;
  }else{
    let toStr = num.toString();
    for(let i = 0; i <= toStr.length - 1; i++){
      let toNum = parseInt(toStr[i]);
      if(num % toNum !== 0){
        return false;
      }
    }
    return true;
  }
}

console.log(selfDividingNumbers(1, 22));