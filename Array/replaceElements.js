/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
  let choice;
  let result = [];

  for(let i = 0; i <= arr.length - 1; i++){
    choice = [];
    for(let j = i + 1; j <= arr.length - 1; j++){
      choice.push(arr[j]);
    }
    if(i === arr.length - 1){
      result.push(-1);
      break;
    }
    let maxVal = Math.max(...choice);
    result.push(maxVal);
  }
  return result;
};

console.log(replaceElements([17,18,5,4,6,1]));