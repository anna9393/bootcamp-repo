// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

function division(x: number): number {

    if (x === 0) {
        throw new Error("fail");
    } else {
        return 10 / x;
    }
}
console.log(division(0));