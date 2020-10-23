'use strict';

/**
 * @param {number[]} A
 * @return {boolean}
 */
const isMonotonic = function(A) {
  let increasing = true;
  let decreasing = true;

  for(let i = 0; i < A.length - 1; i++) {
    if(A[i] > A[i + 1]){
      increasing = false;
    }
    if(A[i] < A[i + 1]){
      decreasing = false;
    }
  }
  return increasing || decreasing;
      
};

let arrays = [1, 3, 2];
console.log(isMonotonic(arrays));