const express = require('express');
const publisherController = require('./publisher-controller.js');
const publisherRouter = express.Router();

publisherRouter.get('/all', publisherController.getAll);
publisherRouter.post('/', publisherController.create);
publisherRouter.get('/:id', publisherController.getById);

module.exports = publisherRouter;