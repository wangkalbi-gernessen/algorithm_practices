'use strict';

/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function(bills) {
  let fiveCoin = 0;
  let tenCoin = 0;
  let twentyCoin = 0;

  for(let i = 0; i <= bills.length - 1; i++){
    if(bills[i] === 5){
      fiveCoin += 1;
    }else if(bills[i] === 10){
      if(fiveCoin >= 1){
        tenCoin += 1;
        fiveCoin -= 1;
      }else{
        return false;
      }
    }else{
      if(fiveCoin >= 3 && tenCoin === 0){
        twentyCoin += 1;
        fiveCoin -= 3;
      }else if(tenCoin >= 1 && fiveCoin >= 1){
        twentyCoin += 1;
        tenCoin -= 1;
        fiveCoin -= 1;
      }else{
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5,5,10,10,20]));
console.log(lemonadeChange([10,10]));
console.log(lemonadeChange([5,5,10]));
console.log(lemonadeChange([5,5,5,10,20]));