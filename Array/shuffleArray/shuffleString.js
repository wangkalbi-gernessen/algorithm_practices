'use strict';

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
  let transit =[];
  let newPosition;
  for(let i = 0; i <= indices.length - 1; i++){
    newPosition = indices[i];
    transit[newPosition] = s[i];
  }
  let result = transit.join('');  
  return result; 
}

let str = "aiohn"
let arrays = [3,1,4,2,0];
console.log(restoreString(str, arrays));