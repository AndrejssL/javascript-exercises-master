/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n) {
  for (let i = 0; i < n; i++) {
    var str = "";
    for (let k = 1; k <= i + 1; k++) {
      str = str + "#";
    }
    for (let j = 1; j < n - i; j++) {
      str = str + " ";
    }
    console.log(str);
  }
}

module.exports = steps;
