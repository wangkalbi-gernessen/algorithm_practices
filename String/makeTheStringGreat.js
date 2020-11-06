/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function(s) {
  let str = "";
  if(s.length === 0 || s.length === 1){
    return s;
  }else{
    let start = 0;
    while(start < s.length){
      if(s[start] === s[start].toLowerCase() && s[start + 1] === s[start + 1].toUpperCase()){
        start += 2;
      }else{
        str += s[start];
        start++;
      }
    }
    return makeGood(str);
  }
};

console.log(makeGood("leEeetcode"));