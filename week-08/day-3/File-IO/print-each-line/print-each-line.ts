// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');

function printEachLine(filename: string) {

    let content: string;

    try {
        content = fs.readFileSync("/Users/smidovaanna/greenfox/anna9393/week-08/day-3/File-IO/print-each-line/myFile.txt", "utf-8");
    } catch {
        throw new Error('Unable to read file: myFile.txt');
    }

    return content;
}
console.log(printEachLine('myFile.txt'));