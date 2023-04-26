const path = require('path');

const homeController = {};

homeController.getMain = (req, res) => {
    res.sendFile(path.join(req.app.get('views'), 'main.html'));
}

module.exports = homeController;