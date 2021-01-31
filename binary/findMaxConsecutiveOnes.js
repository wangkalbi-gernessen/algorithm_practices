/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
  let maxCount = 0;
  let curr = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curr += 1;
    } else {
      curr = 0;
    }
    if (maxCount < curr) {
      maxCount = curr;
    }
  }
  return maxCount;
};


console.log(findMaxConsecutiveOnes([1,0,1,1,1,1]));