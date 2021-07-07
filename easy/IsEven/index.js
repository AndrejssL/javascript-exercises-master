/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n) {
  let string = n.toString();
  let indexOfDot = string.indexOf(".");
  if (indexOfDot > -1) {
    string = string.slice(0, indexOfDot);
  }
  let lastDigit = string.substr(-1);
  if (
    lastDigit == 1 ||
    lastDigit == 3 ||
    lastDigit == 5 ||
    lastDigit == 7 ||
    lastDigit == 9
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = isEven;
