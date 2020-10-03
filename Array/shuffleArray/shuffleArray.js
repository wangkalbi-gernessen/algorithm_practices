'use strict';

let array = [1,2,3,4,5,6,7,8,9,10];

const shuffleArray = function(arr){
  let newPosition;
  let temp;
  for(let i = 0; i <= arr.length - 1; i++){
    newPosition = Math.floor(Math.random() * (i +1));
    temp = arr[i];
    arr[i] = arr[newPosition];
    arr[newPosition] = temp;
  }
  return arr;
};

console.log(shuffleArray(array));