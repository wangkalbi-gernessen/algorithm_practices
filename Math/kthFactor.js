'use strict';

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthFactor = function(n, k) {
  let arrays = [];
  for(let i = 1; i <= n; i++){
    if(n % i === 0){
      arrays.push(i);
    }
  }
  
  if(arrays.length >= k){
    for(let j = 0; j <= arrays.length - 1; j++){
      if(j + 1 === k){
        return arrays[j];
      }
    }
  }else{
    return -1;
  }
};

console.log(kthFactor(1000, 3));