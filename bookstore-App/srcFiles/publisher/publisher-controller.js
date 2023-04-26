const conn = require('../dtb-connection.js');

const publisherController = {};

publisherController.getAll = (req, res) => {
    conn.query('SELECT * FROM publisher;', (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send({
                result: 'OK',
                publishers: result
            });
        }
    });
};

publisherController.create = (req, res) => {
    const data = req.body;
    conn.query('INSERT INTO publisher (pub_name, pub_city, country, country_office, no_of_branch, estd) VALUES (?,?,?,?,?,?);',
        [data.name, data.city, data.country, data.office, data.branches, data.estd], (error, result) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.send({
                    id: result.insertId
                });
            }
        });
};

publisherController.getById = (req, res) => {
    const id = req.params.id;
    conn.query(`SELECT * FROM publisher WHERE pub_id = ?;`, [id], (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send({
                publisher: result
            })
        }
    })
}

module.exports = publisherController;