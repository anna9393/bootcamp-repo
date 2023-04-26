
// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

import * as fs from 'fs';

function writeName(filename: string) {
    try {
        let fileContent = 'Anna Kašíková'
        fs.writeFileSync('my-file.txt', fileContent);
    } catch {
        throw new Error("Unable to write file: my-file.txt")
    }
}

writeName('my-file.txt');