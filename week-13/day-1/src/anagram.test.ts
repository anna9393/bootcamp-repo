import { anagram } from "./anagram";

test('if "heart" is an anagram of "earth"', () => {
    expect(anagram('heart', 'earth')).toBeTruthy()
})