'use strict';

const mapWith = (array, callback) => {
    let output = [];
    for (let element of array) {
        output.push(callback(element));
    }
    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array.

    return output;
}

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]



// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];
const removeSecondLetter = (string) => {
    let array = string.split('');
    for (let i = 1; i < array.length; i += 1) {
        array.splice(i, 1)
    }
    return array.join('');
}

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
