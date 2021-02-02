/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
const busyStudent = function(startTime, endTime, queryTime) {
  let count = 0;
  let leng = startTime.length;
  for (let i = 0; i < leng; i++) {
    for (let j = startTime[i]; j <= endTime[i]; j++) {
      if (j === queryTime) {
        count++;
        break;
      }
    }
  }
  return count;
};

console.log(busyStudent([9,8,7,6,5,4,3,2,1], [10,10,10,10,10,10,10,10,10], 5));