let ListA = new Array('Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee');
//Create a new list ('List B') with the values of List A
let ListB = Array.from(ListA);
console.log(ListB);
//Print out whether List A contains "Durian" or not
console.log(ListA.indexOf("Durian") > -1);
//Remove "Durian" from List B
ListB.splice(3, 1);
console.log(ListB);
//Add "Kiwifruit" to List A after the 4th element
ListA.splice(4, 0, "Kiwifruit");
console.log(ListA);
//Compare the size of List A and List B
console.log(ListA.length === ListB.length);
//Get the index of "Avocado" from List A and index of "Durian" from List B
console.log(ListA.indexOf("Avocado"), ListB.indexOf("Durian"));
//Add "Passion Fruit" and "Pomelo" to List B in a single statement
ListB.push("Passion Fruit", "Pomelo");
console.log(ListB);
//Print out the 3rd element from List A
console.log(ListA[2]);
//Print all elements of List A and all elements of List B
console.log(Object.values(ListA));
console.log(Object.values(ListB));

//The full output of your main method

function main(x: string[], y: string[]) {
    console.log(x.indexOf("Durian") > -1);
    console.log(x.length === y.length);
    console.log(x.indexOf("Avocado"));
    console.log(y.indexOf("Durian"));
    console.log(x[2]);
    console.log(Object.values(x));
    console.log(Object.values(y));
}
main(ListA, ListB);