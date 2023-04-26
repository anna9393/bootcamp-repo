class Animal {
    hunger: number;
    thirst: number;

    constructor(hunger: number = 0, thirst: number = 0) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat(): number {
        return this.hunger = this.hunger - 1;
    }

    drink(): number {
        return this.thirst = this.thirst - 1;
    }

    play(): number {
        return this.hunger += 1;
        return this.thirst += 1;
    }
}
export { Animal };