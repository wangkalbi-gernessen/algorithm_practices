'use strict';

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  let str = "";
  if(x === 0){
    return 0;
  }else if(x > 0){
    let strNum = x.toString();
    if(strNum[strNum.length - 1] === '0'){
      
    }
    
    
    
      for(let i = strNum.length - 1; i >= 0; i--){
        
          str += strNum[i];
        }
      }
      return str;
  }else if (x < 0){
    let strNum = x.toString();
    for(let i = strNum.length - 1; i > 0; i--){
      if(strNum[strNum.length - 1] === "0"){
        continue;
      }else{
        str += strNum[i];
      }
    }
    return str * -1;
  }
};

console.log(reverse(120));