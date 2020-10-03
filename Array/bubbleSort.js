'use strict';

const bubbleSort = function(arrays){
  let steps = 0;
  let swapped = true;
  for(let scan = 0; scan <= arrays.length - 1; scan++){
    for(let i = 0; i <= arrays.length - 1 - scan; i++){
      steps += 1;
      if(arrays[i] > arrays[i + 1]){
        let temp = arrays[i];
        arrays[i] = arrays[i + 1];
        arrays[i + 1] = temp;
      }
    }
  }
  return arrays;
}

let arrays = [10, 1, 8, 2, 4, 7, 3];
console.log(bubbleSort(arrays));