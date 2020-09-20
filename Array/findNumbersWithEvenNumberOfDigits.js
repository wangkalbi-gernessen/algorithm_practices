'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let count = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i].toString().length % 2 === 0){
      count += 1;
    }
  }
  return count;
};

let arrays = [12,345,2,6,7896];
console.log(findNumbers(arrays));