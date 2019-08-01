/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
  let occurrences = {};
  for (let letterIndex in str) {
    let letter = str[letterIndex];
    if (occurrences[letter] == undefined) {
      occurrences[letter] = 0;
    }
    occurrences[letter] = occurrences[letter] + 1;
  }
  let mostCommonLetter = str.charAt(0);
  for (let letter in occurrences) {
    let currentLetterCount = occurrences[letter];
    let mostCommonLetterCount = occurrences[mostCommonLetter];
    if (currentLetterCount > mostCommonLetterCount) {
      mostCommonLetter = letter;
    }
  }
  return mostCommonLetter;
}

module.exports = maxChar;
