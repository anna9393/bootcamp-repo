class Station {
    gasAmount: number;

    constructor(gasAmount: number) {
        this.gasAmount = gasAmount;
    }

    refill(car: Car) {
        if (this.gasAmount > car.capacity && car.gasAmount !== car.capacity) {
            this.gasAmount = this.gasAmount - car.capacity;
            car.gasAmount = car.gasAmount + car.capacity;
        } else { console.log('can\'t refill - full tank') }

    }
}

class Car {
    gasAmount: number;
    capacity: number;

    constructor() {
        this.gasAmount = 0;
        this.capacity = 100;
    }

}

let station = new Station(500);
let mazda = new Car;

console.log(station.gasAmount);
console.log(mazda.gasAmount);
station.refill(mazda);
station.refill(mazda);
console.log(station.gasAmount);
console.log(mazda.gasAmount);