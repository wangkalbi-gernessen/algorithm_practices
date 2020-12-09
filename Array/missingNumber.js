'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
  let actual_sum = 0;
  for(let i = 0; i < nums.length; i++){
    actual_sum += nums[i];
  }
  let n = nums.length + 1;
  let sum_of_n = (n * (n-1) / 2);
  return sum_of_n - actual_sum;
}

let arrays = [1];
console.log(missingNumber(arrays));