import { count } from "console";

function countEars(x: number): number {
    if (x <= 0) {
        return 0
    } else {
        return 2 + countEars(x - 1);
    }
}
console.log(countEars(12));