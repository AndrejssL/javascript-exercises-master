/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array) {
  let secondArray = array.slice(0);
  let secondLargest = secondArray.sort()[secondArray.length - 1];

  console.log(secondLargest);

  return secondLargest;
}

module.exports = secondLargest;
