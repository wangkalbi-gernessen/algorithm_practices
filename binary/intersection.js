'use strict';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  
  let temp = [];
  for(let i = 0; i <= nums1.length -1; i++){
    for(let j = 0; j <= nums2.length -1; j++){
      if(nums1[i] === nums2[j]){
        temp.push(nums1[i]);
      }
    }
  }
  
  let result = []
  for(let k = 0; k <= temp.length - 1; k++){
    if(result.indexOf(temp[k]) === -1){
      result.push(temp[k]);
    }
  }
  return result;
};

let arrays1 = [4,9,5];
let arrays2 = [9,4,9,8,4];
console.log(intersection(arrays1, arrays2));