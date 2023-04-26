//We have bunnies standing in a line numbered as 1, 2, ...
//The "odd" bunnies (1, 3, ...) have the usual number of ears = 2.
//the even bunnies (2, 4, ...) have 3 ears each
//Write a recursive method which accepts the number of bunnies as a parameter
//returns the total number of "ears" in the bunny line. 
//The method should be able to handle invalid input (e.g. negative numbers).

function numberOfEars(x: number): number {
    if (x < 0) {
        throw new Error("x must be bigger than 0");
    } else if (x == 0) {
        return 0
    }
    else if (x % 2 == 0) {
        return 3 + numberOfEars(x - 1);
    } else {
        return 2 + numberOfEars(x - 1);
    }

}
console.log(numberOfEars(-2));