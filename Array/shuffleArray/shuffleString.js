'use strict';

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
  let result = "";

  for(let i = 0; i <= indices.length - 1; i++){
    let j = indices[i];
    result += s[j] // l 
  }
  return result;
}

let str = "aiohn"
let arrays = [3,1,4,2,0];
console.log(restoreString(str, arrays));