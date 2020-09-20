'use strict';

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  nums.sort();
  console.log(nums);
  let temp = [];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0){
      nums.push(nums.shift());
    }
  }
  return nums;
};

let arrays = [0, 1, 0, 3, 12];
console.log(moveZeroes(arrays));