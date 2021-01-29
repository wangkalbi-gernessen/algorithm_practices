/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function(salary) {
  // select the maximum salary
  let maximum = 0;
  for (let i = 1; i < salary.length; i++) {
    if (salary[maximum] < salary[i]) {
      maximum = i;
    }
  }
  // select the minimum salary 
  let minimum = 0;
  for (let j = 0; j < salary.length; j++) {
    if (salary[minimum] > salary[j]) {
      minimum = j;
    }
  }
  // calculate average except maximum and minimum
  let sum = 0;
  let count = 0;
  for (let k = 0; k < salary.length; k++) {
    if (salary[k] === salary[maximum] || salary[k] === salary[minimum]) {
      continue;
    }
    sum += salary[k];
    count += 1;
  }

  sum /= count;
  return sum;
};

console.log(average([4000,3000,1000,2000]));