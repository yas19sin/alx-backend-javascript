export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // Optional: Add getters/setters if needed for direct access, though not required by task
    get brand() { return this._brand; }

    get motor() { return this._motor; }

    get color() { return this._color; }

    cloneCar() {
        const Species = this.constructor[Symbol.species] || this.constructor;
        return new Species();
    }
}
