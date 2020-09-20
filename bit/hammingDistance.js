'use strict';

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xBinaryVal = x.toString(2).split('').sort().join('').indexOf("1");
  let yBinaryVal = y.toString(2).split('').sort().join('').indexOf("1");
  let  distanceVal = Math.abs(xBinaryVal - yBinaryVal);

  return distanceVal;

};

console.log(hammingDistance(2, 6));