'use strict';

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function(nums) {
  let maj = 0;
  let count = 1;
  let result = [];
  for(let i = 1; i < nums.length; i++){
    if(nums[i] === nums[maj]){
      count += 1;
    }else{
      count -= 1;
    }

    if(count === 0){
      maj = i;
      count = 1;
    }
  }
  
  w


};

console.log(majorityElement([3,2,3]));