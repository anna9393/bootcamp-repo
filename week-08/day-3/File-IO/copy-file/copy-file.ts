// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

import * as fs from 'fs';

function copyContent(pathFromFile: string, pathToFile: string) {
    try {
        let fileContent = fs.readFileSync(pathFromFile, 'utf-8');
        fs.writeFileSync(pathToFile, fileContent);
        return true
    } catch (err) {
        return false;
    }
}

copyContent('/Users/smidovaanna/greenfox/anna9393/week-08/day-3/File-IO/copy-file/filefrom.txt', '/Users/smidovaanna/greenfox/anna9393/week-08/day-3/File-IO/copy-file/fileto.txt');