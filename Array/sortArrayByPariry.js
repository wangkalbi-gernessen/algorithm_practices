'use strict';

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let result = [];
  let oddStorage = [];
  for(let i = 0; i < A.length; i++){
    if(A[i] % 2 === 0){
      result.push(A[i]);
    }else{
      oddStorage.push(A[i]);
    }
  }

  oddStorage.forEach(val =>{
    result.push(val);
  });

  return result;
};

console.log(sortArrayByParity([3,1,2,4]));