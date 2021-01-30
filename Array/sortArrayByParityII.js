/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function(A) {
  let odds = A.filter(A => A % 2 !== 0);
  let evens = A.filter(A => A % 2 === 0);
  let result = [];
  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      result.push(evens.pop());
    } else {
      result.push(odds.pop());
    }
  }
  return result;
  
};

console.log(sortArrayByParityII([4,2,5,7]));  