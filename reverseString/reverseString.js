'use strict';

// let reverseString = function(str){
//   let result = "";
//   for(let i = str.length -1; i >= 0; i--){
//     result += str[i];
//   }
//   return result.split("");
// }

// console.log(reverseString("hello"));

let reverseString = function(arr){
  return arr.reverse();
}  

let array = ["h", "e", "l", "l", "o"];
console.log(reverseString(array));

