'use strict';

//binary Search
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// const binarySearch = function(num, target){
//   for(let i = 0; i < num.length; i++){
//     if(num[i] === target){
//       return `${target} is found in ${i} steps.`;
//     }
//   }
//   return false;
// };
// const binary = binarySearch(numbers, 10);
// console.log(binary);


//Binary Search
let numbers = [4, 7, 9, 11, 20, 24, 30, 41];

const binarySearch = function(num, target){

  let step = 0;
  let min = 0;
  let max = num.length - 1;
  let guess;

  for(let i = min; i < max; i++){
    step += 1;
    guess = Math.floor((max + min) / 2);
    if(num[guess] === target){
      return `${num[guess]} is found in ${step} step`;
    }else if(target > num[guess]){
      min = guess + 1;
    }else if(target < num[guess]){
      max = guess -1;
    }
  }
  return false;  
};  
const binary = binarySearch(numbers, 27);
console.log(binary);