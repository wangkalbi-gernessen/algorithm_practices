'use strict';

const selectionSort = function(arrays){
  for(let scan = 0; scan <= arrays.length - 1; scan++){
    // make minimum index
    let min = scan;
    for(let i = scan + 1; i <= arrays.length - 1; i++){
      if(arrays[min] > arrays[i]){
        min = i;
      }
    }

    if(arrays[scan] > arrays[min]){
      let temp = arrays[scan];
      arrays[scan] = arrays[min];
      arrays[min] = temp;
    }
  }
  return arrays; 
}

let arrays = [8, 4, 6, 7, 2, 3, 1];
console.log(selectionSort(arrays));