'use strict';

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let i = 0;
  let n = nums.length;
  while (i < n) {
      if (nums[i] == val) {
          nums[i] = nums[n - 1];
          // reduce array size by one
          n--;
      } else {
          i++;
      }
  }
  return n;
  // let result = [];
  // for(let i = 0; i <= nums.length - 1; i++){
  //   if(nums[i] !== val){
  //     result.push(nums[i]);
  //   }
  // }
  // return result.length;
};

console.log(removeElement([3,2,2,3], 3));