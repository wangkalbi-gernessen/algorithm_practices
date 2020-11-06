'use strict';

/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function(heights) {
  let count = 0;
  let sortedArrays = heights.slice(0).sort();
  for(let i = 0; i <= heights.length - 1; i++){
    if(heights[i] !== sortedArrays[i]){
      count += 1;
    }
  }
  return count;  
};

console.log(heightChecker([10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]));