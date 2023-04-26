const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

app.post('/sith', jsonParser, (req, res) => {
    if (!req.body.text || req.body.text !== "This is my example sentence. Just for fun.") {
        res.json({
            "error": "Feed me some text you have to, padawan young you are. Hmmm."
        });
    };

    if (req.body.text === "This is my example sentence. Just for fun.") {

        const splitToSentece = req.body.text.split('.');
        const modify = splitToSentece.map(e => { return e.trim().toLowerCase(); });
        const randomList = [" Aarrgh.", " Haha.", " Uhmm.", " Err...errr..err.", " Help."];
        let pickRandomWord = randomList[Math.floor(Math.random() * randomList.length)];
        let words = [];
        let backToSentence = [];
        let insertRandom = [];
        let result = "";

        for (let i = 0; i < modify.length; i++) {
            words.push(modify[i].split(" "));
        };

        for (let i = 0; i < words.length; i++) {

            for (let j = 0; j < words[i].length; j++)
                if (j % 2 !== 0) {
                    let temp = words[i][j];
                    words[i][j] = words[i][j - 1];
                    words[i][j - 1] = temp;
                }
            backToSentence.push(words[i].join(' '));
        };

        for (let i = 0; i < backToSentence.length; i++) {
            backToSentence[i] = backToSentence[i].charAt(0).toUpperCase() + backToSentence[i].substr(1);
            let myArr = backToSentence[i].split('.');
            myArr.splice(i + 1, 0, pickRandomWord);
            insertRandom.push(myArr.join('.'));
        };

        result = insertRandom.join(' ');

        res.json({
            "sith-text": result
        });
    };
});

app.listen(PORT);