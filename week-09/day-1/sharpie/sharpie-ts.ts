
/*We need to specify the color and the width at creation
Every sharpie is created with a default inkAmount value: 100
We can use() the sharpie objects: using it decreases inkAmount by 10
*/

class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string = 'unknown', width: number = 0, inkAmount: number = 100) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    use(): number {
        return this.inkAmount = this.inkAmount - 10;
    }
}
export { Sharpie }