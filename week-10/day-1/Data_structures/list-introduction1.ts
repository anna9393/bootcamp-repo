//Create an empty list which will contain names (strings)
let myList: string[] = [];
//Print out the number of elements in the list
console.log(myList.length);
//Add "William" to the list
myList.push("William");
//Print out whether the list is empty or not
console.log(myList);
console.log(myList.hasOwnProperty(0));
console.log(myList.valueOf());

if (myList.length <= 0) {
    console.log("myList is empty");
} else {
    console.log("myList is NOT empty");
}
//Add "John" to the list, Add "Amanda" to the list, Print out the number of elements in the list
myList.push("John", "Amanda");
console.log(myList);
console.log("My list has " + myList.length + " elements");
//Print out the 3rd element
console.log(myList[2]);
//Iterate through the list and print out each name
for (let i = 0; i < myList.length; i++) {
    console.log((i + 1) + ". " + myList[i]);
}
//Remove the 2nd element
console.log(myList.splice(1, 1));
//Iterate through the list in a reversed order and print out each name
for (let i = myList.length - 1; i >= 0; i--) {
    console.log(myList[i]);
}
//Remove all elements
console.log(myList.splice(0, myList.length));
console.log(myList.length);


//The full output of main method
let myList2: string[] = [];
function main(x: string[]): void {
    console.log(x.length);
    console.log(x.length > 0);

    x.push("William", "John", "Amanda");

    console.log(x.length);
    console.log(x[2]);

    for (let i = 0; i < x.length; i++) {
        console.log(x[i]);
    }

    for (let i = 0; i < x.length; i++) {
        console.log((i + 1) + ". " + x[i]);
    }
    x.splice(1, 1);
    for (let i = x.length - 1; i >= 0; i--) {
        console.log(x[i]);
    }
    x.splice(0, x.length);
    console.log(x.length);

}
main(myList2);