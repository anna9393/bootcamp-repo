const { query } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

//When a user visits our /?name={name} route, greet them on their name.
//When a user visits the base route (/) without a given name, render this page: Welcome, Guest!

app.get('/', (req, res) => {
    let person;

    if (req.query.name) {
        person = req.query.name
    } else {
        person = 'Guest'
    }
    res.render('home', { name: person });

});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});