'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const peakIndexInMountainArray = function(arr) {
  let largest = 0;
  for(let i = 1; i <= arr.length - 1; i++){
    if(arr[largest] < arr[i]){
      largest = i;
    }
  }
  return largest;
  
};

console.log(peakIndexInMountainArray([0,10,5,2]));