'use strict';
// I would like to replace "dishwasher" with "galaxy" in this example variable, but it has a problem
// Expected ouput: In a galaxy far far away

let example: string = 'In a dishwasher far far away';
let re = /dishwasher/;
let example2 = example.replace(re, "galaxy");
console.log(example2);
