// Create a method that decrypts reversed-order.txt

import * as fs from 'fs';

function reverseOrder(filename: string) {
    const content: string = fs.readFileSync(filename, 'utf-8');
    const reversedLines: string = content.split('\n').reverse().join('\n');

    fs.writeFileSync(filename, reversedLines);
}

reverseOrder('reversed-order.txt');