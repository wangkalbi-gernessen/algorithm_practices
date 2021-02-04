/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
  let dict = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
  };
  let temp = [];
  let str;
  for (let i = 0; i < words.length; i++) {
    str = "";
    for (let j = 0; j < words[i].length; j++) {
      str += dict[words[i][j]];
    }
    temp.push(str);
  }
  // Delete duplicate string from array
  let single = [];
  for (let k = 0; k < temp.length; k++) {
    if (! single.includes(temp[k])) {
      single.push(temp[k]);
    }
  }
  return single.length;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));