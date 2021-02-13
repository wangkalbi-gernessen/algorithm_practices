/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
  let dict = {};
  let sortedArray = arr.sort();
  let count = 1;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i+1]) {
      count += 1;
    } else {
      dict[sortedArray[i]] = count;
      count = 1;
    }
  }
  let values = Object.values(dict);
  let sortedValues = values.sort();
  for (let k = 0; k < sortedValues.length; k++) {
    if (sortedValues[k] === sortedValues[k+1]) {
      return false;
    }
  }
  return true;
};

console.log(uniqueOccurrences([26,2,16,16,5,5,26,2,5,20,20,5,2,20,2,2,20,2,16,20,16,17,16,2,16,20,26,16]));