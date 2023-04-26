function sumOfDigits(x: number): number {
    if (x == 0) {
        return 0;
    } else {
        return Math.floor((x % 10) + sumOfDigits(x / 10));
    }
}

console.log(sumOfDigits(111));