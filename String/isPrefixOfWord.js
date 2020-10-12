'use strict';

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = function(sentence, searchWord) {
  let splitElement = sentence.split(' ');
  // console.log(splitElement);
  for(let i = 0; i <= splitElement.length - 1; i++){
    if(splitElement[i].indexOf(searchWord) === 0){
      return i + 1;
    }
  }
  return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg"));