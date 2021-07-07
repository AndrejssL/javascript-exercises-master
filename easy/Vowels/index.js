/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(string) {
  let list = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (list.indexOf(string[i]) !== -1) {
      count += 1;
    }
  }
  return count;
}

// function vowels(str) {
//   return str.match(/[aeiou]/gi).length;
// }

module.exports = vowels;
