import { Sum } from "./sum";

//test sum() method with multiple elements in list of numbers
test('method sum() should return sum of integers in the given list', () => {
    const obj = new Sum();
    const list: number[] = [1, 2, 3, 4, 7, 1000, 9, 50, 36];
    let init: number = 0;
    let sum: number;

    expect(sum = list.reduce((x, y) => x + y, init)).toEqual(obj.sum(list));
})

//test sum() method with an empty list of numbers
test('method sum() should pass for empty list', () => {
    const obj = new Sum();
    const list: number[] = [];
    let init: number = 0;
    let sum: number;

    expect(sum = list.reduce((x, y) => x + y, init)).toEqual(obj.sum(list));
})

//test sum() method with one element in list of numbers
test('method sum() should pass with one element in list', () => {
    const obj = new Sum();
    const list: number[] = [5];
    let init: number = 0;
    let sum: number;

    expect(sum = list.reduce((x, y) => x + y, init)).toEqual(obj.sum(list));
})