/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input) {
  let words = input
    .toUpperCase()
    .replace("-", " ")
    .replace("_", " ")
    .split(/[\s,]+/);
  let acronym = "";
  i = 0;
  while (i < words.length) {
    nextWord = words[i];
    acronym = acronym + nextWord.charAt(0);
    i = i + 1;
  }
  return acronym;
}

module.exports = parse;
