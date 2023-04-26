export class Pirate {

    amountOfRumDrunk: number = 0;
    isAlive: boolean = true;
    hasParrot: boolean = true;

    drinkSomeRum(): number | void {
        if (this.isAlive === true) {
            return this.amountOfRumDrunk++;
            console.log(`he drank ${this.amountOfRumDrunk} liters of rum`)
        } else {
            console.log('he\'s dead');
        }
    }

    howsItGoingMate(): void | number {
        let initAmountOfRumDrunk = 0;
        if (this.isAlive === true) {
            if (this.amountOfRumDrunk < 4) {
                console.log('Pour me anudder!')
            } else {
                console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?')
                this.amountOfRumDrunk = initAmountOfRumDrunk;
            }
        } else {
            console.log('he\'s dead');
        }
    }

    brawl(pirate: Pirate): void {
        if (this.isAlive === true && pirate.isAlive === true) {
            if (pirate.amountOfRumDrunk === this.amountOfRumDrunk) {
                console.log('Zzzzzzz.....');
            } else if (pirate.amountOfRumDrunk > this.amountOfRumDrunk) {
                pirate.die();
            } else if (pirate.amountOfRumDrunk < this.amountOfRumDrunk) {
                this.die();
            }
        } else {
            console.log('he\'s dead');
        }
    }

    die(): boolean {
        return this.isAlive = false;
        console.log('he\'s dead');
    }
}