import { Animal } from './animal-ts';

let dog = new Animal(50, 50);
let horse = new Animal(50, 50);
let chicken = new Animal(50, 50);
let pig = new Animal(50, 50);
let sheep = new Animal(50, 50);

class Farm {
    readonly listOfAnimals: Animal[];

    constructor() {
        this.listOfAnimals = [dog, horse, chicken, pig, sheep];
    }

    breed(animal: Animal): void {
        if (this.listOfAnimals.length < 5) {
            this.listOfAnimals.push(animal);
            console.log('You breed new animal')
        } else {
            console.log('You don\'t have space for another animal in your farm');
        }
    }

    sell(): void {
        let leastHungerAnimalIndex: number = 0;
        let leastAnimalHunger: number = Infinity;

        for (let i = 0; i < this.listOfAnimals.length; i++) {
            if (this.listOfAnimals[i].hunger < leastAnimalHunger) {
                leastAnimalHunger = this.listOfAnimals[i].hunger;
                leastHungerAnimalIndex = i;
            }
        }

        this.listOfAnimals.splice(leastHungerAnimalIndex, 1);
    }
}



let farm = new Farm();
let cat = new Animal(50, 50);

farm.breed(cat);
console.log(farm);

chicken.eat()
dog.eat()

farm.sell();
console.log(farm);

farm.breed(cat);
console.log(farm);

farm.sell();
console.log(farm);