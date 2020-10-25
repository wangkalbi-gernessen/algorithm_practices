'use strict';

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessnumber = function(n) {
  let max = n;
  let min = 1;
  let steps = 0;
  while(min <= max){
    steps += 1;
    let mid = Math.floor((max + min) / 2);
    let result = guess(mid);
    if(result === 0){
      return mid;
    }else if(result === 1){
      min = mid + 1;
    }else{
      max = mid - 1;
    }
  }
  return -1;
  
};

console.log(guessnumber(10));