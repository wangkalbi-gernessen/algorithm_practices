'use strict';

/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function(S) {
  let length = S.length;
  let str = "";
  if(length == 0 || length == 1){
      return S;
  }else{
    let index = 0;
    let count = 0;
    while(index < length - 1){
        if(S.charAt(index) == S.charAt(index + 1)){
            count += 1;
            index += 2;
        }else{
            str += S.charAt(index);
            index += 1;
        }
        str += S.charAt(length - 1);
    }

    if(count > 0){
        return removeDuplicates(str);
    }else{
        return str;
    }
  }
};

console.log(removeDuplicates("abbaca"));