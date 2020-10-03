'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function(nums) {
  for(let i = 0; i < nums.length - 1; i++){
    let maxVal = i;
    for(let j = i + 1; j <= nums.length - 1; j++){
      if(nums[maxVal] < nums[j]){
        maxVal = j;
      }
    }

    if(nums[i] < nums[maxVal]){
      let temp = nums[i];
      nums[i] = nums[maxVal]
      nums[maxVal] = temp
    }
  }

  let sum = 1;
  for(let k = 0; k <= nums.length - 1; k++){
    if(k === 3){
      break;
    }
    sum *= Math.abs(nums[k]);
  }
  return sum;

};

console.log(maximumProduct([-1,-2,-3]));