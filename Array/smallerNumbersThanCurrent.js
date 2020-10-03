'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
 */

let count;
let result = [];

const smallerNumbersThanCurrent = function(nums) {
  for(let i = 0; i <= nums.length - 1; i++){
      count = 0;
    for(let j = 0; j <= nums.length -1; j++){
      if(nums[i] > nums[j]){
        count += 1;
      }
    }
    result.push(count);
  }
  return result;
};

let arrays = [6, 5, 4, 8];
console.log(smallerNumbersThanCurrent(arrays));
