/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     var str = "";
//     for (let j = 0; j < n - i; j++) {
//       str = str + " ";
//     }
//     for (let k = 0; k < (2 * i) - 1; k++) {
//       str = str + "#";
//     }
//     for (let l = 0; l < i + 1; l++) {
//       str = str + " ";
//     }
//     console.log(str);
//   }
// }

const pyramid = n => {
  for (i = 1; i <= n; i++) {
    // Levels
    const arr = [];
    for (l = 0; l < n - i; l++) {
      arr.push(" ");
    }
    for (l = 0; l < 2 * i - 1; l++) {
      arr.push("#");
    }
    for (l = 0; l < n - i; l++) {
      arr.push(" ");
    }
    console.log(arr.join(""));
  }
};
module.exports = pyramid;
