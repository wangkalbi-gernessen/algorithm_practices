/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function(nums) {
  let sortedArray = nums.sort();
  let count = 1;
  let result = [];
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i+1]) {
      count += 1;
    } else {
      if (count > 1) {
        count = 1;
      } else {
        result.push(sortedArray[i]);
        count = 1;
      }
    }
  }
  let answer = result.reduce((a, b) => a + b, 0);
  return answer;
};

console.log(sumOfUnique([1,1,1,1]));