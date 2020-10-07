'use strict';
/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  let count = 0;
  if(n === 0 || n === 1){
    return 0;
  }else{
    for(let i = 2; i < n; i++){
      if(isPrime(i)){
        count += 1;
      }else{
        continue;
      }
    }
    return count;
  }
};

const isPrime = function(num){
  if(num === 0 || num === 1){
    return false;
  }else{
    for(let j = 2; j < num; j++){
      if(num % j === 0){
        return false;
      }
    }
    return true;
  }
};

console.log(countPrimes(12));