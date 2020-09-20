'use strict';

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {  
  let dateValue = new Date(date);
  let first_day = new Date("2019/01/01");
  let answer = dateValue.getTime() - first_day.getTime();
  let myDay = Math.floor(answer / (1000*60*60*24));
  return myDay + 1;
  
};

console.log(dayOfYear("2019/01/09"));