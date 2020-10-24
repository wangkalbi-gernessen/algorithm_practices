'use strict';

/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function(n) {
  if(n > 1690){
    return 0;
  }else{
    let arr = [];
    let num = 1;
    while(arr.length < n){
      if(isUglyNumber(num)){
        arr.push(num);
      }
      num += 1;
    }
    return arr[n - 1];
  } 
}

const isUglyNumber = function(i){
  if(i <= 0){
    return false;
  }
  if(i === 1){
    return true;
  }
  while(i % 2 === 0){
    i /= 2;
  }
  while(i % 3 === 0){
    i /= 3;
  }
  while(i % 5 === 0){
    i /= 5;
  }
  return i === 1;
}

console.log(nthUglyNumber(10));