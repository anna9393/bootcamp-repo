// Create a method that find the 5 most common lottery numbers in lottery.csv
import * as fs from 'fs';

function findTopFive(filename: string) {
    let content: string[];
    let myArr: string[] = [];
    let map = new Map<string, number>();

    try {
        content = fs.readFileSync(filename, 'utf-8').split('\n');
    } catch (e) {
        throw new Error('File does not exist');
    }

    for (let i = 0; i < content.length; i++) {
        let positionF = content[i].indexOf('F');

        let myLine = content[i].slice(positionF);

        myArr.push(myLine);
    }

    let nums = myArr.toString().split(';');


    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const value = map.get(element);

        if (value != undefined) {
            map.set(element, value + 1);
        } else {
            map.set(element, 1);
        }

    }

    console.log([...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).reduce((map, x) => map.set(x[0], x[1]), new Map<string, number>()));
}

findTopFive('lottery.csv');