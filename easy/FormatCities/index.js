/**
 * Format Cities
 *
 * Array of countries and their capitals are passed to your function, together with a mapping function.
 * Apply mapping function to an array and return newly created array as result.
 */

function formatCities(array, fn) {
  let transformIntoString = function(it) {
    return it.city + "" + it.country;
  };
  console.log(array.map(it => it.city + " " + it.country));

  return array.map(fn);
}

module.exports = formatCities;
