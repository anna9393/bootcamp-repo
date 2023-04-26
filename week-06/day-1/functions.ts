// double input parameter, return doubled value

let baseNumber = 123;

function doubleNumber() {

let multiplyTwo = (baseNumber) * 2;
console.log(multiplyTwo);
}

doubleNumber();

// multiply value

function multiplyThreeTimes (a){

    let myNumber = (a) * 3;
    console.log(myNumber);

}

multiplyThreeTimes(5);

// print greeting message

function greet(){
    let nameToGreet = "Green Fox";
    console.log('Greetings dear' + '',nameToGreet);
}
greet();

//greet by name 

function Hello(name){
console.log("Hello. Nice to meet you," + "", name);

}
Hello("Mia");
Hello("Kinga");

//append "A" to value

let typo = "Chinchill"

function appendA(){
    console.log(typo + "a");
}

appendA();

//append "s" to value

function appendS(name){
    let plural = (name + "s");
    console.log(plural);
}

appendS("apple");

//sum of numbers from 0 to given parameter

function sum(a){

let sumOfPrevious = a * (a+1) / 2;

console.log(sumOfPrevious);
}

sum(3);