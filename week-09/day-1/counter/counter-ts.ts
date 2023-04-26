export class Counter {
    counter: number = 0;
    intValue: number = 0;

    constructor(x?: number) {
        if (typeof x !== 'undefined') {
            this.counter = x
            this.intValue = this.counter
        }
    }
    //add another whole number to this counter: add(number) 
    //increase the counter's value by one: add() (no parameters)
    public add(x?: number): number {
        if (typeof x !== 'undefined') {
            return this.counter = x;
        }
        else { return ++this.counter; }
    }
    //we can get() the current counter value
    public get(): number {
        return this.counter;
    }
    //we can reset() the counter to the initial value set during the construction of the class
    public reset(): number {
        return this.counter = this.intValue;
    }
}