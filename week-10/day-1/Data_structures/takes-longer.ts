
'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!


let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let insertText = "always takes longer than";

let firstPart = quote.slice(0, 20);
let secondPart = quote.slice(21);

console.log(firstPart + " " + insertText + " " + secondPart);