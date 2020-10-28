/**
 * @param {number} num
 * @return {string}
 */
const toHex = function(num) {
  let str = "";
  let n = num;
  let toHex; 
  let reminder;
  while(n > 0){
    n = num / 16;
    reminder = num % 16;
    if(reminder === 10){
      str += "a";
    }else if(reminder === 11){
      str += "b";
    }else if(reminder === 12){
      str += "c";
    }else if(reminder === 13){
      str += "d";
    }else if(reminder === 14){
      str += "e";
    }else if(reminder === 15){
      str += "f";
    }else{
      str += n.toString();
    }
  }
  return 
  
};

console.log(toHex(-1));