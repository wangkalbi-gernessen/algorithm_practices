'use strict';

let array = [1,2,3,4,5,6,7,8,9,10];

let shuffleArray = function(arr){
  let newPosition;
  let temp;
  for(let i = arr.length - 1; i > 0; i--){
    newPosition = Math.floor(Math.random() * (i +1));
    temp = array[i];
    arr[i] = arr[newPosition];
    arr[newPosition] = temp;
  }
  return arr;\
};

console.log(shuffleArray(array));