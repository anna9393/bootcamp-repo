const conn = require('../dtb-connection.js');

const authorController = {};

authorController.getAll = (req, res) => {
    conn.query('SELECT * FROM author;', (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send({
                result: 'OK',
                authors: result
            });
        }
    });
};

authorController.create = (req, res, next) => {
    const data = req.body;

    if (!data?.name || !data?.country || !data?.homeCity) {
        //res.status(400).send();
        next("Missing data for author creation");
    } else {
        conn.query('INSERT INTO author (aut_name, country, home_city) VALUES (?,?,?);', [data.name, data.country, data.homeCity],
            (error, result) => {
                if (error) {
                    res.status(500).send(error);
                } else if (result.affectedRows == 0) {
                    res.status(400).send();
                } else {
                    res.status(201).send({ id: result.insertId });
                }
            });
    }
};

authorController.getById = (req, res) => {
    const id = req.params.id;

    conn.query(`SELECT * FROM author WHERE aut_id = ?;`, [id],
        (error, result) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.send({
                    author: result
                }
                )
            }
        })
}

module.exports = authorController;