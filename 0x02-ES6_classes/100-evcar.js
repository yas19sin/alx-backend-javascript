import Car from './10-car.js';

export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this.range = range;
    }

    get range() {
        return this._range;
    }

    set range(value) {
        // Add type validation if necessary, e.g., check if it's a string
        this._range = value;
    }

    // eslint-disable-next-line class-methods-use-this
    cloneCar() {
        // Return an instance of Car instead of EVCar
        const Species = Car; // Explicitly use Car class
        return new Species();
    }
}
