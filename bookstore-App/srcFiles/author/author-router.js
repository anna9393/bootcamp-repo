const express = require('express');
const authorController = require('./author-controller.js');

const authorRouter = express.Router();

authorRouter.get('/all', authorController.getAll);
authorRouter.post('/', authorController.create);
authorRouter.get('/:id', authorController.getById);

module.exports = authorRouter;