import { countLetters } from "./count_letters";

describe('should return object with letters as keys and values as number of occurences of letters in given word', () => {
    it('Hello', () => {
        expect({ 'H': 1, 'e': 1, 'l': 2, 'o': 1 }).toMatchObject(countLetters('Hello'));
    })

    it('electric', () => {
        expect({ 'e': 2, 'l': 1, 'c': 2, 't': 1, 'r': 1, 'i': 1 }).toMatchObject(countLetters('electric'));
    })
})