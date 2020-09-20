'use strict';

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
  let sorted = nums.sort();
  for(let i = 0; i < nums.length; i++){
    if(sorted[i+1] === sorted[i]){
      return true;
    }
    return false;
  }
};  

let array = [1,2,3,1];
console.log(containsDuplicate(array));