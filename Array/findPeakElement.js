/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
  // find largest number at first
  let largestIndex = 0;
  for(let i = 1; i < nums.length; i++){
    if(nums[largestIndex] < nums[i]){
      largestIndex = i;
    }
  }
  let largestValue = nums[largestIndex];
  return nums.indexOf(largestValue);
};

const ans = findPeakElement([1,2,1,3,5,6,4]);
console.log(ans);