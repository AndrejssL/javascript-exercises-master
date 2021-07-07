/**
 * Gigasecond
 *
 * Given a moment, determine the moment that would be after a gigasecond has passed.
 * A gigasecond is 10^9 (1,000,000,000) seconds.
 */

function gigasecond(date) {
  let result = new Date(date.valueOf() + Math.pow(10, 12));
  return result;
}
module.exports = gigasecond;
