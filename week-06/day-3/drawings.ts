//draw square pattern

let n = 12;
let string = "";

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);

//draw hollow square

let lines = 15;
let txt = "";

for (let k = 0; k < lines; k++) {
    for (let l = 0; l < lines; l++) {
        if (k === 0 || k === lines - 1) {
            txt += "*";
        }
        else {
            if (l === 0 || l === lines - 1) {
                txt += "*";
            }
            else {
                txt += " ";
            }
        }

    }
    txt += "\n";
}
console.log(txt);