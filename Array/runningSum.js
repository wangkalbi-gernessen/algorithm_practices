'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
*/

let result = [];
let count = 0;

const runningSum = function(nums) {
  for(let i = 0; i <= nums.length - 1; i++){
    count += nums[i];
    result.push(count);
  }
  return result;
};

let arrays = [3, 1, 2, 10, 1];
console.log(runningSum(arrays));