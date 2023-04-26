const express = require('express');
const apiRouter = require('./srcFiles/api-router.js');
const errorHandler = require('./srcFiles/error-handler.js');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(apiRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`>>>> app is running on localhost:${PORT}`);
});