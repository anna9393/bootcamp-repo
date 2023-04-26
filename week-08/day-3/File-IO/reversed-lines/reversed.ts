// Create a method that decrypts reversed-lines.txt
import { reverse } from 'dns';
import * as fs from 'fs';

function decrypt(filename: string) {
    const content: string = fs.readFileSync(filename, 'utf-8');
    const reversedChar: string = content.split('').reverse().join('');
    const reversedLines: string = reversedChar.split('\n').reverse().join('\n');

    fs.writeFileSync(filename, reversedLines);
}

decrypt('reversed-lines.txt');