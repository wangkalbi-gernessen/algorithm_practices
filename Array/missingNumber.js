'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let actual_sum = 0;
  for(let i = 0; i < nums.length; i++){
    actual_sum += nums[i];
  }
  let n = nums.length + 1;
  let sum_of_n = Math.floor((n * (n+1) / 2));
  return sum_of_n - actual_sum;
};

let arrays = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(arrays));