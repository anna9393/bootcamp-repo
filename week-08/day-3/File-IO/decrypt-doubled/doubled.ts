
// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

import * as fs from 'fs';

function decryptDoubled(filename: string) {

    const content: string[] = fs.readFileSync(filename, 'utf-8').split('');

    for (let i = 0; i < content.length; i++) {
        if (content[i] === content[i - 1]) {
            content.splice(i, 1);
        }
    }
    const newCont = content.toString().replace(/,/g, '');
    fs.writeFileSync('output.txt', newCont);

}

decryptDoubled('duplicated-chars.txt');