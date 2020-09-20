'use strict';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  
  for(let i = 1; i <= k; i++){
    nums.unshift(nums.pop());
    console.log(nums);
  }
};

let arrays = [1,2,3,4,5,6,7];
rotate(arrays, 3);