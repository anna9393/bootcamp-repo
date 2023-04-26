import { FibOnIndex } from "./fibonacci";

describe('return fibonacci number on index given', () => {

    it('for 0 should return 0', () => {
        expect(FibOnIndex(0)).toBe(0);
    })

    it('for negative integer should return an error msg', () => {
        expect(() => { FibOnIndex(-3); }).toThrow('Does not work for negative numbers');
    })

    it('for positive value should return the output', () => {
        expect(FibOnIndex(10)).toBe(55);
    })
})