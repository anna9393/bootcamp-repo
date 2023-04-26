const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const conn = require('./db-conn');
const homeRouter = require('./routers/home.router');
const apiRouter = require('./routers/api.router');

app.set('/views', path.join(__dirname, 'views'));

app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(homeRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`app is listening on localhost:${PORT}`);
})