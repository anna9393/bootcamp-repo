'use strict';
// change "bots" for "odds"
// URL is missing a crucial component, find out what it is and insert it

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
url = url.replace("bots", "odds");
// url = url.replace("https", "https:");
let substring1 = url.substring(0, 5);
let substring2 = url.substring(5, url.length);
console.log(substring1 + ":" + substring2);