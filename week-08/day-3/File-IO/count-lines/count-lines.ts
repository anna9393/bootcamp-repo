// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
import * as fs from 'fs';

function countLines(filename: string): number {
    try {
        let linesInFile = fs.readFileSync('/Users/smidovaanna/greenfox/anna9393/week-08/day-3/File-IO/count-lines/countLines.txt', 'utf-8').split('\n');
        return linesInFile.length;
    } catch (err) {
        return 0;
    }
}
console.log(countLines('countLines.txt'));