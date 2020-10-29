'use strict';

/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = function(n) {
  let numToString = n.toString();
  let temp = [];
  let added = 0;
  for(let i = numToString.length - 1; i >= 0; i--){
    temp.push(numToString[i]);
    added += 1;
    if(added % 3 === 0){
      temp.push(".");
    }
  }
  if(temp[temp.length - 1] === "."){
    temp.pop();
  }
  
  let result = [];
  // reverse number with float
  for(let j = temp.length - 1; j >= 0; j--){
    result.push(temp[j]);
  }
  return result.join('');
};

console.log(thousandSeparator(987));