export class Sum {

    sum(numArr: number[]): number {
        let sumOfElements: number = 0;
        for (let i = 0; i < numArr.length; i++) {
            sumOfElements += numArr[i];
        }
        return sumOfElements;
    }
}