'use strict';
// Things are a little bit messed up here
// Your job is to decode the notSoCrypticMessage by using the hashmap as a lookup table
// Assemble the fragments into the out variable

let out: string = '';
let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];

let hashmap: Record<number, string> = {
    7: 'run around and desert you',
    50: 'tell a lie and hurt you ',
    49: 'make you cry, ',
    2: 'let you down',
    12: 'give you up, ',
    1: 'Never gonna ',
    11: '\n',
    3: 'say goodbye '
};

let firstPart = 'Never gonna ' + 'give you up, ' + 'Never gonna ' + 'let you down' + '\n';
let secondPart = 'Never gonna ' + 'run around and desert you' + '\n';
let thirdPart = 'Never gonna ' + 'make you cry, ' + 'Never gonna ' + 'say goodbye ' + '\n';
let lastPart = 'Never gonna ' + 'tell a lie and hurt you ' + '\n';

out = firstPart + secondPart + thirdPart + lastPart;


console.log(out);