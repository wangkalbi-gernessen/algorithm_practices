/**
 * @param {number} N
 * @return {boolean}
 */
const divisorGame = function(N) {
  let num = N
  let move =0;
  while(num > 1) {
    for (let i = 1; i < num; i++) {
      if (num % i == 0) {
        num -=  i ;
        move += 1;
        break;
      }
    }
  }
  return move % 2 !== 0;
};

console.log(divisorGame(3));