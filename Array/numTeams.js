'use strict';

/**
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = function(rating) {
  let result = [];
  let increasing = [];
  let increaseConsecutiveCount = 0;
  let decreasing = [];
  let decreaseConsecutiveCount = 0;

  for(let i = 0; i < rating.length - 1; i++){
    for(let j = i; j < rating.length - 1; j++){
      if(rating[j] > rating[j + 1]){
        decreasing.push(rating[j]);
        decreaseConsecutiveCount += 1;
      }else{
        increasing.push(rating[j]);
        increaseConsecutiveCount
      }

      if(increaseConsecutiveCount === 2){

      }else if( )


    }
    result.push(temp);
  }
  return result.length;
};

console.log(numTeams([2,5,3,4,1]));