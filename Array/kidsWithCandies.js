'use strict';

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
  let result = [];
  let switched;

  // Found max value 
  let max = Math.max(...candies);

  // Found true or false
  for(let i = 0; i <= candies.length - 1; i++){
    if((candies[i] + extraCandies) < max){
      switched = false;
      result.push(switched);
    }else{
      switched = true;
      result.push(switched);
    }
  }
  return result;
};

let arrays = [2,3,5,1,3];
console.log(kidsWithCandies(arrays, 3));