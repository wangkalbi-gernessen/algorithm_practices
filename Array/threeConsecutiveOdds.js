'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function(arr) {
  let count = 0;
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] % 2 !== 0){
      if(arr[i + 1] % 2 !== 0){
        count += 1;
      }else{
        count = 0;
      }
    }

    if(count === 2){
      return true;
    }
  }
  return false;
};

console.log(threeConsecutiveOdds([1,1,1]));