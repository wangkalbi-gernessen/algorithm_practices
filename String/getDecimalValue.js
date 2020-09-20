'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function(head) {
  let binaryVal = head.join('');
  return parseInt(binaryVal, 2);
}

let arrays = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0];
console.log(getDecimalValue(arrays));