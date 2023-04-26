const express = require('express');
const apiRouter = express.Router();
const apiController = require('../controllers/api.controller');

apiRouter.post('/links', apiController.insertAlias);

module.exports = apiRouter;