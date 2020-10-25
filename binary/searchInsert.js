'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  for(let i = 0; i <= nums.length - 1; i++){
    if(target === nums[i]){
      return i;
    }
  }
  nums.push(target);
  
  // Set minimum index of  value
  for(let scan = 0; scan < nums.length - 1; scan++){
    min = scan;
    for(let j = scan + 1; j <= nums.length - 1; j++){
      if(nums[min] > nums[j]){
        min = j;
      }
    }

    // Rearrange element
    if(nums[scan] > nums[min]){
      let temp = nums[scan];
      nums[scan] = nums[min];
      nums[min] = temp;
    }
  }
  
  // Display index of pushed value
  for(let sort = 0; sort <= nums.length - 1; sort++){
    if(target === nums[sort]){
      return sort;
    }
  }
};

console.log(searchInsert([1,3,5,6], 9));