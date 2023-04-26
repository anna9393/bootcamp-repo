const { dirname } = require('path');
const path = require('path');
const homeController = {};

homeController.get = (req, res) => {
    res.sendFile(path.join(req.app.get('views'), 'index.html'));
};

module.exports = homeController;