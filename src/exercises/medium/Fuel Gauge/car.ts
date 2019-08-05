export class FuelGauge {
  static minAmount: number;
  static maxAmount: number;
  constructor(private amount: number) {
  }

  decrease(number: number) {
    if (this.amount === FuelGauge.minAmount) {
      throw new Error("No more Fuel");
    } else {
      this.amount -= number;
    }
  }

  increase(number: number) {
    if (this.amount >= FuelGauge.maxAmount) {
      throw new Error("Can't fill up no more!");
    } else 
    if (this.amount < FuelGauge.maxAmount) {
      this.amount++;
    }
  }

  report() {
      console.log(`There are ${this.amount}L of fuel in the tank`);
  }
}

FuelGauge.minAmount = 0;
FuelGauge.maxAmount = 70;

export class Odometer {
  counter: number = 0;
  static minMileage: number;
  static maxMileage: number;
  currentOdometer: number;
  constructor(private mileage: number, private fuelGauge: FuelGauge) {}

  report() {
    console.log("Current mileage is " + this.mileage + "km");
  }

  increase() {
    this.counter++;
    if (this.counter % 10 === 0) {
      this.fuelGauge.decrease(1);
      this.counter = 0;
    }
    if (this.mileage < Odometer.maxMileage) {
      this.mileage = this.mileage +1
      this.currentOdometer += 0
    } else {
      this.mileage = 0
    }

    if (this.currentOdometer == 10) {
      this.fuelGauge.decrease(1)
      this.currentOdometer = 0
    }
    }
  }


Odometer.minMileage = 0;
Odometer.maxMileage = 999999;

const fuelGauge = new FuelGauge(70);
const odometer = new Odometer(10000, fuelGauge);
for (let i = 0; i < 70; i++) {
  //   console.log("Filling up...");
  fuelGauge.increase(1);
}
for (let i = 0; i < 100; i++) {
  //   console.log("Driving...");
  odometer.increase();
}

fuelGauge.report(); // 10L in the tank
odometer.report(); // 100000 milage

module.exports = {
  FuelGauge,
  Odometer
};
