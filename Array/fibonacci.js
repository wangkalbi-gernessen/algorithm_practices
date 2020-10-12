// Recursive
// 'use strict';

// /**
//  * @param {number} N
//  * @return {number}
//  */
// const fib = function(N) {
//   if(N == 0){
//     return 0;
//   }else if(N == 1 || N == 2){
//     return 1;
//   }else{
//     return fib(N - 1) + fib(N - 2);
//   }
// };

// console.log(fib(4));

// Iterativ
const fib = function(N) {
  let a = 1;
  let b = 0;
  let temp;

  while(N > 0){
    temp = a;
    a = a + b;
    b = temp;
    N--;
  }
  return b;
};

console.log(fib(4));
