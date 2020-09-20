'use strict';

/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function(s) {
  let count = 1;
  let result = [];
  // console.log(s);
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i+1]){
      count += 1;
    }else if(s[i] !== s[i+1]){
      result.push(count);
      count = 1;
    }
  }
  let maxVal = Math.max(...result); //To output maximam consecutive number from array
  return maxVal;
  // console.log(result);
  // result.map((val) => {
  //   return Math.max(...(val));
  // });
};

let str = "triplepillooooow";
console.log(maxPower(str));