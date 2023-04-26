const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const todos = ['get up', 'walk the dog', 'coffee', 'more coffee', 'survive', 'watching Netflix', 'go back to bed'];

    res.render('home', { list: todos })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})