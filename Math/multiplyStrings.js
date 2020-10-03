'use strict';

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
    let num1Str = parseInt(num1);
    let num2Str = parseInt(num2);
    let sum = Math.floor(num1Str * num2Str);
    return sum.toString();
};

console.log(multiply("123456789", "987654321"));