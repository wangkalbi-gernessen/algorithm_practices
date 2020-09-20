'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let newArray = [];
  for(let i = 0; i < nums.length; i++){
    if(newArray.indexOf(nums[i]) === -1){
      newArray.push(nums[i]);
    }
  }
  return newArray.length;
};

let array = [1,2,3,1];
console.log(removeDuplicates(array));