// Create a function that
// - takes the name of a CSV file as a parameter,
//   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - and returns the year when the most births happened.
//   - if there were multiple years with the same number of births then return any of them

// You can find such a CSV file in this directory named births.csv
// If you pass "births.csv" to your function, the result should be either 2006 or 2016.

import * as fs from 'fs';

function mostCommYear(filename: string) {
    const content: string[] = fs.readFileSync(filename, 'utf-8').split('\n');
    let listOfYears: string[] = [];

    for (let i = 0; i < content.length; i++) {
        const posSemicolon: number = content[i].indexOf(';');
        const posDash: number = content[i].indexOf('-');

        const slicedYear = content[i].slice(posSemicolon + 1, posDash);

        listOfYears.push(slicedYear);
    }

    //ordered map
    let map = new Map();

    for (let i = 0; i < listOfYears.length; i++) {
        if (map.has(listOfYears[i])) {
            map.set(listOfYears[i], map.get(listOfYears[i]) + 1);
        } else {
            map.set(listOfYears[i], 1);
        }
    }
    //console.log(map);
    //find most frequent
    let maxCount: number = 0;
    let most_freq: number = 0;

    map.forEach((value, key) => {
        if (maxCount < value) {
            most_freq = key;
            maxCount = value;
        }
    })
    console.log(most_freq);
}

mostCommYear('births.csv');