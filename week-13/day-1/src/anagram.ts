export function anagram(string1: string, string2: string): boolean {
    const arr1: string[] = string1.split('');
    const arr2: string[] = string2.split('');

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && arr1.length === arr2.length) {
            return true;
        }
    }
    return false;
}