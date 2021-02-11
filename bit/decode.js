/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(encoded, first) {
  let result = [first];
  for(let i = 0; i < encoded.length; i++) {
    result.push(encoded[i] ^ result[i]);
  }  
  return result;
};

console.log(decode([6,2,7,3], 4));
