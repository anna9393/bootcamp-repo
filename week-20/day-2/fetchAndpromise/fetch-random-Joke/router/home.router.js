const express = require('express');
const homeController = require('../controller/home.controller');

const homeRouter = express.Router();

homeRouter.get('/', homeController.get);

module.exports = homeRouter;