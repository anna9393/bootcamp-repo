export function countLetters(word: string): Map<string, number> {
    let dictionary = new Map<string, number>();

    for (let i = 0; i < word.length; i++) {
        const keyChar = word.charAt(i);
        const value = dictionary.get(keyChar);

        if (value != undefined) {
            dictionary.set(keyChar, value + 1)
        } else {
            dictionary.set(keyChar, 1);
        }
    }
    return dictionary;
}