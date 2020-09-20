'use strict';

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function(s, indices) {
    let arr = s.split('');
    console.log(arr);
};

console.log(restoreString("aiohn", [3, 1, 4, 2, 0]));