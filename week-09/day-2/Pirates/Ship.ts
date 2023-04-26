import { Pirate } from './Pirates';

class Ship {

    nameOfTheShip: string;
    crewOfTheShip: Pirate[] = [];
    captainOfTheShip: Pirate | undefined;

    constructor(ShipName: string) {
        this.nameOfTheShip = ShipName;

    }

    fillShip(): void {
        const numOfPirates = 1 + Math.floor(Math.random() * 113);
        for (let i = 0; i < numOfPirates; i++) {
            this.crewOfTheShip.push(new Pirate);
        }

        this.captainOfTheShip = this.crewOfTheShip[0];

    }

    infoAboutShip(): void {
        console.log(`!you see ${this.nameOfTheShip}!` + '\n' + 'dangerous pirate ship' + '\n');
        if (this.captainOfTheShip?.isAlive === true) {
            console.log('Captain of The Ship is still alive!' + '\n' + `He drunk ${this.captainOfTheShip.amountOfRumDrunk} liters of rum.`);
        } else {
            console.log(`Captain of The Ship is dead! + '\n' + He drunk ${this.captainOfTheShip?.amountOfRumDrunk} liters of rum.`);
        }
        console.log(`There's a ${this.alivePiratesInCrew()} pirates still alive on the ship.`);
    }

    alivePiratesInCrew() {
        let counter: number = 0;
        for (let i = 0; i < this.crewOfTheShip.length; i++) {
            if (this.crewOfTheShip[i].isAlive === true)
                counter++
        }
        return counter;
    }
}

let pirateTony = new Pirate;
let pirateJim = new Pirate;
let pirateBob = new Pirate;
let captainZayn = new Pirate;

pirateTony.drinkSomeRum();
pirateTony.drinkSomeRum();
pirateTony.drinkSomeRum();
pirateTony.drinkSomeRum();

let blackPearl = new Ship('Black Pearl');
blackPearl.fillShip();

console.log(blackPearl.crewOfTheShip);
console.log(blackPearl.captainOfTheShip);

blackPearl.infoAboutShip();