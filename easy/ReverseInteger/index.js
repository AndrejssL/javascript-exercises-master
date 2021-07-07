/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int) {
  if (int < 0) return -reverse(-int);
  var str = int.toString();
  var strArray = str.split("");
  var revArray = strArray.reverse();
  var rev = revArray.join("");
  return Number(rev);
}

module.exports = reverse;
