'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  nums.sort();
  const arrLength = nums.length;
  
  if(arrLength % 2 === 0){
    return nums[arrLength / 2];
  }else{
    return nums[(arrLength - 1) / 2];
  }
};

let array = [2,2,1,1,1,2,2];
console.log(majorityElement(array));