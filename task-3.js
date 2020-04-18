'use strict';
const findLongestWord = function (string) {
  const wordsOfString = string.split(' ');
  let longestWord = wordsOfString[0];
  for (const word of wordsOfString) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
