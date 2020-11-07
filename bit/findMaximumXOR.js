'use strict';

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = function(nums) {
  let result;
  let arr = [];
  if(nums.length === 1){
    return 0;
  }else{
    // insert xor of each value into variable arr
    for(let i = 0; i < nums.length - 1; i++){
      for(let j = i + 1; j <= nums.length - 1; j++){
        result = nums[i] ^ nums[j];
        arr.push(result);
      }
    }
    // extract maximum value from variable arr
    let largest = 0;
    for(let i = 0; i <= arr.length - 1; i++){
      if(arr[largest] < arr[i]){
        largest = i;
      }
    }
    return arr[largest];
  }
};

console.log(findMaximumXOR([3,10,5,25,2,8]));