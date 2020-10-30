'use strict';

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const countPrimeSetBits = function(L, R) {
  let count = 0;
  for(let i = L; i <= R; i++){
    let binary = i.toString(2);
    if(isPrime(binary)){
      count += 1;
    }
  }
  return count;
};

const isPrime = function(binary){
  let oneNumber = 0;
  for(let i = 0; i <= binary.length - 1; i++){
    if(binary[i] === "1"){
      oneNumber += 1;
    }
  }

  if(oneNumber === 1){
    return false;
  }else{
    for(let j = 2; j < oneNumber; j++){
      if(oneNumber % j === 0){
        return false;
      }
    }
    return true;
  }  
};

console.log(countPrimeSetBits(6, 10));
