'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
  let largest = 0;
  for(let i = 1; i <= nums.length - 1; i++){
    if(nums[largest] < nums[i]){
      largest = i;
    }
  }
  return largest;
  
  
  
};

console.log(findPeakElement([1,2,1,3,5,6,4]));