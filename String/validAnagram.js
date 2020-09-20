'use strict';

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let s_sort_value = s.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
  let t_sort_value = t.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
  if(s_sort_value === t_sort_value){
    return true;
  }else{
    return false;
  }
};

let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t));