/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let a_decimal = parseInt(a, 2);
  let b_decimal = parseInt(b, 2);
  
  let total_decimal = a_decimal + b_decimal;
  
  return total_decimal.toString(2);
};

console.log(addBinary(11,1));



