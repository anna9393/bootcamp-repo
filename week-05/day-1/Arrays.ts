//append-a.ts exercise

const animals = ["koal", "pand", "zebr", "anacond","bo","chinchill","cobr","gorill","hyen","hydr","iguan","impal","pum","tarantul","pirahn"];

animals.forEach(element => console.log(element + 'a'));

//double-items.ts exercise

const drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];

drinks.forEach(element => console.log(element+element));

//use .map for double elements

const Drinks = ['Gin','Whiskey','Wine','Beer'];

const doubleDrinks = Drinks.map(element => element + element);

console.log(doubleDrinks);

//colors.ts exercise

let colors = [['lime','forest green', 'olive', 'pale green', 'spring green'], ['orange red','red','tomato'], ['orchid', 'violet', 'pink', 'hot pink']];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//sum-all.ts exercise

let numbers = [3, 4, 5, 6, 7].reduce(function(a, b){ return a + b});

console.log("The sum of all elements is" + '',numbers);

//diagonal-matrix.ts exercise

const matrix = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
];

for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];

    console.log(element.toString());
}

//reverse.ts exercise

let numberss = [3, 4, 5, 6, 7];

numberss.reverse();
console.log(numberss);

//use loop for reverse order of elements

let nums = [3, 4, 5, 6, 7];

for (let i = nums.length - 1;i >= 0; i--){
    const element = nums[i];
    console.log(element);
}