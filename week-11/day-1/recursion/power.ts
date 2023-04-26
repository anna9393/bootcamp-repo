//recursive method (no loops) which returns the value of base to the n-th power

function powerN(x: number, y: number): number {
    if (y == 0) {
        return 1;
    } else {
        return x * powerN(x, y - 1);
    }
}
console.log(powerN(10, 2));