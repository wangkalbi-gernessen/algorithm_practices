/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = function(text, first, second) {
  let result = [];
  let splitText = text.split(" ");
  for (let i = 0; i < splitText.length; i++) {
    if (splitText[i - 2] === first && splitText[i - 1] === second) {
      result.push(splitText[i]);
    }
  }
  return result;
};

console.log(findOcurrences("we will we will rock you", "we", "will"));