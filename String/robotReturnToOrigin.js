'use strict';

/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function(moves) {
  let row = 0;
  let column = 0;
  for(let i = 0; i <= moves.length - 1; i++){
    if(moves[i] === "U"){
      column += 1;
    }else if(moves[i] === "D"){
      column -= 1;
    }else if(moves[i] === "L"){
      row -= 1;
    }else{
      row += 1;
    }
  }
  if(row === 0 && column === 0){
    return true;
  }else{
    return false;
  }
};

console.log(judgeCircle("LDRRLRUULR"));