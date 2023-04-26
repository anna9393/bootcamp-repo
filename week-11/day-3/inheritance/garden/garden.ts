export { };

class Garden {
    _plantList: Plant[] = new Array<Plant>();

    constructor() {
        this._plantList.push(new Flower('yellow'));
        this._plantList.push(new Flower('blue'));
        this._plantList.push(new Tree('purple'));
        this._plantList.push(new Tree('orange'));
    }

    waterPlants(amount: number) {
        let plantsNeedWater: Plant[] = new Array<Plant>();
        let waterPortion: number;

        console.log('\n' + `Watering with ${amount}`);
        for (let i = 0; i < this._plantList.length; i++) {
            if (this._plantList[i].needWater()) {
                plantsNeedWater.push(this._plantList[i]);
            }
        }

        waterPortion = amount / plantsNeedWater.length;
        plantsNeedWater.forEach((value) => {
            value.beingWatered(waterPortion);
        })
    }

    plantInfo() {
        for (let i = 0; i < this._plantList.length; i++) {
            this._plantList[i].needWater();
        }
    }
}

class Plant {
    _color: string;
    _currentWaterAmount: number = 0;

    constructor(color: string) {
        this._color = color;

    }

    needWater(): boolean {
        return true;
    }

    beingWatered(amount: number): void { }
}

class Tree extends Plant {
    constructor(color: string) {
        super(color);
    }

    needWater(): boolean {
        if (this._currentWaterAmount < 10) {
            console.log(`The ${this._color} ${Tree.name} needs water`);
            return true;
        } else {
            console.log(`This ${this._color} ${Tree.name} doesn't need water`);
            return false;
        }
    }

    beingWatered(amount: number): void {
        this._currentWaterAmount += (amount / 100) * 40;
    }
}

class Flower extends Plant {
    constructor(color: string) {
        super(color);
    }

    needWater(): boolean {
        if (this._currentWaterAmount < 5) {
            console.log(`The ${this._color} ${Flower.name} needs water`);
            return true;
        } else {
            console.log(`This ${this._color} ${Flower.name} doesn't need water`);
            return false;
        }
    }

    beingWatered(amount: number): void {
        this._currentWaterAmount += (amount / 100) * 75;
    }
}
let myGarden = new Garden();

myGarden.plantInfo();
myGarden.waterPlants(40);
myGarden.waterPlants(70);