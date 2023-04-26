import { Sharpie } from './sharpie-ts';

class SharpieSet {
    listOfSharpies: any[];

    constructor() {
        this.listOfSharpies = [];
    }

    add(sharpie: Sharpie): void {
        this.listOfSharpies.push(sharpie);
    }

    countUsable(): number {
        let counter: number = 0;

        for (let sharpie of this.listOfSharpies) {
            if (sharpie.inkAmount > 0) {
                counter++
            };
        }
        return counter;
    }

    removeTrash(): void {
        for (let sharpie of this.listOfSharpies) {
            if (sharpie.inkAmount <= 0) {
                this.listOfSharpies.splice(0, sharpie);
            }
        }

    }
}

//create few objects: Sharpie
let mySharpie1 = new Sharpie('red', 5);
let mySharpie2 = new Sharpie('green', 2);
let mySharpie3 = new Sharpie('yellow', 8);

//create object: Sharpieset
let sharpieset = new SharpieSet();

//add Sharpie objects into Sharpieset 
sharpieset.add(mySharpie1);
sharpieset.add(mySharpie2);
sharpieset.add(mySharpie3);
console.log(sharpieset);

//print number of usable sharpies from sharpieset
console.log(sharpieset.countUsable());

//use mySharpie1 10times
for (let i = 0; i < 10; i++) {
    mySharpie1.use();
}

//use my Sharpie2 10times
for (let i = 0; i < 10; i++) {
    mySharpie2.use();
}

//remove unusable sharpie from sharpieset
sharpieset.removeTrash();
console.log(sharpieset.countUsable());