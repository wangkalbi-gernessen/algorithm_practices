'use strict';

const shuffleArray = function(nums, n){
  let x = nums.slice(0, n);
  let y = nums.slice(n);
  let result = [];

  for(let i = 0; i < nums.length / 2; i++){
    let cx = x[i];
    let cy = y[i];

    result.push(cx);
    result.push(cy);
  }
  return result;
}
//   let newPosition;
//   let temp;
//   for(let i = 0; i <= nums.length - 1; i++){
//     newPosition = Math.floor(Math.random() * (i +1));
//     temp = nums[i];
//     nums[i] = nums[newPosition];
//     nums[newPosition] = temp;
//   }
//   return nums;
// };

console.log(shuffleArray([2,5,1,3,4,7], 3));