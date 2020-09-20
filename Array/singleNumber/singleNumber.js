'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  let sorted = nums.sort();
  for(let i = 0; i < sorted.length; i++){
    if(sorted[i-1] !== sorted[i] && sorted[i+1] !== sorted[i]){
      return sorted[i];
    }
  }
};

let numbers = [2, 1, 4, 4, 2];
console.log(singleNumber(numbers));