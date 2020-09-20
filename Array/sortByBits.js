'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  let result = [];
  let count;
  
  for(let i = 0; i < arr.length; i++){
    arr[i].toString(2);
    count = 0;
    if(arr[i].toString(2).indexOf("1") === -1){
      count +=1;
      result.push(count);
      console.log(result);
    }
  }
  return count;
  
  
    
};

let arrays = [0,1,2,3,4,5,6,7,8];
console.log(sortByBits(arrays));