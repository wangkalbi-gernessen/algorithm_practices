/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = function(gain) {
  let result = [0];
  for (let i = 0; i < gain.length; i++) {
    result.push(result[i] + gain[i]);
  }

  let largest = 0;
  for (let j = 1; j < result.length; j++) {
    if (result[largest] < result[j]) {
      largest = j;
    }
  }
  return result[largest];
};

console.log(largestAltitude([44,32,-9,52,23,-50,50,33,-84,47,-14,84,36,-62,37,81,-36,-85,-39,67,-63,64,-47,95,91,-40,65,67,92,-28,97,100,81]));