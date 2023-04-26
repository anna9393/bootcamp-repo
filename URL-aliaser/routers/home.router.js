const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controllers/home.controller');

homeRouter.get('/', homeController.getMain);

module.exports = homeRouter;