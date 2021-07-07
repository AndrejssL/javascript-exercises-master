/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function cleanUpWord(word) {
  return word.replace(/[^a-z]/gi, "");
}

function longestWord(sen) {
  let words = sen.split(" ").map(cleanUpWord);
  let longestWord = words[0];
  for (let i in words) {
    let word = words[i];
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
module.exports = longestWord;
