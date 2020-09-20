/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  let line1 = l1.replace(/->/g, '').split('');
  let line2 = l2.replace(/->/g, '').split('');
  line1.push(line2);
  console.log(line1);
  

};

console.log(mergeTwoLists("1->2->4", "1->3->4"));