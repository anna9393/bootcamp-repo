const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    // render `home.ejs`
    res.render('home', {
        title: 'Hello World',
        paragraph: 'add just a random paragraph',
        image: 'https://randomwordgenerator.com/img/picture-generator/57e7d0434d5aa814f1dc8460962e33791c3ad6e04e507441722872d7934ecc_640.jpg'
    });
});

// start express app on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});