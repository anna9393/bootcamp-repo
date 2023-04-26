const express = require('express');
const authorRouter = require('./author/author-router.js');
const publisherRouter = require('./publisher/publisher-router.js');

const apiRouter = express.Router();

apiRouter.use('/author', authorRouter);
apiRouter.use('/publisher', publisherRouter);

apiRouter.get('/exception', () => {
    throw new Error("My error");
});

module.exports = apiRouter;