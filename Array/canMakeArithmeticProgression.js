'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = function(arr) {
  for(let i = 0; i < arr.length - 1; i++){
    let min = i;
    for(let j = i + 1; j <= arr.length - 1; j++){
      if(arr[min] > arr[j]){
        min = j;
      }
    }
    if(arr[i] > arr[min]){
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  
  let count = 2;
  let standard = Math.abs(arr[0] - arr[1]);
  for(let i = 1; i < arr.length; i++){
    if(Math.abs(arr[i] - arr[i + 1]) === standard){
      count += 1;
    }
  }
  if(count === arr.length){
    return true;
  }else{
    return false;
  }
};

console.log(canMakeArithmeticProgression([-68,-96,-12,-40,16]));