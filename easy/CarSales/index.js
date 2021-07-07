/**
 * Car Sales
 *
 * Array of car sales information object is passed, your task is to calculate total sales for each of the make.
 *
 * Car sales information is an object with the following properties:
 *
 *  - make
 *  - model
 *  - colour
 *  - price
 */

function sales(carsSold) {
  let totals = {};
  for (let i in carsSold) {
    let car = carsSold[i];
    if (totals[car.make] == undefined) {
      totals[car.make] = 0;
    }
    totals[car.make] = totals[car.make] + car.price;
  }
  return totals;
}

module.exports = sales;
