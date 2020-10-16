'use strict';

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
  /**
   * make a power of each element
   */
  let power = [];
  for(let i = 0; i <= A.length - 1; i++){
    let a = Math.pow(A[i], 2);
    power.push(a);
  }

  /**
   * make a sort of array(power)
   */
  for(let k = 0; k < power.length - 1; k++){
    let minVal = k;
    for(let h = k + 1; h <= power.length - 1; h++){
      if(power[minVal] > power[h]){
        minVal = h;
      }
    }
    if(power[k] > power[minVal]){
      let temp = power[k];
      power[k] = power[minVal];
      power[minVal] = temp;
    }
  }
  return power;

};

let array = [-4,-1,0,3,10];
console.log(sortedSquares(array));