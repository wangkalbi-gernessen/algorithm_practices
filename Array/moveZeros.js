'use strict';

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let placeNonZeros = 0;
  for(let i = 0; i <= nums.length - 1; i++){
    if(nums[i] !== 0){
      nums[placeNonZeros] = nums[i];
      placeNonZeros++;
    }
  }
  for(let j = placeNonZeros; j <= nums.length - 1; j++){
    nums[j] = 0;
  }
  return nums;
  
};
// let arrays = [0, 1, 0, 3, 12];
let arrays = [0,0,1];
console.log(moveZeroes(arrays));