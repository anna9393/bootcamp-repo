const express = require('express');
const path = require('path');
const homeRouter = require('./router/home.router');
const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'static')));
//app.use(express.json());
app.use(homeRouter);

app.listen(PORT, () => {
    console.log(`App is running on localhost:${PORT}`);
});