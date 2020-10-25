'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  for(let i = 0; i <= nums.length - 1; i++){
    if(target === nums[i]){
      return i;
    }
  }
  return -1;
};

console.log(search([-1,0,3,5,9,12]));