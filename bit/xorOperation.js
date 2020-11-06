'use strict';

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
  let nums = [];
  for(let i = 0; i < n; i++){
    nums.push(start + (2 * i));
  }
  
  let result;
  for(let j = 0; j <= nums.length - 1; j++){
    if(j === 0){
      result = nums[j] ^ nums[j + 1];
    }else{
      result = result ^ nums[j + 1];
    }
  }
  return result;
};

console.log(xorOperation(5, 0));