const path = require('path');
const conn = require('../db-conn');
const apiController = {};

apiController.insertAlias = (req, res) => {
    if (!req.body.url || !req.body.alias)
        return res.status(401).send({
            error: "something is missing"
        })

    conn.query(`SELECT id FROM links WHERE alias = ?`, [req.body.alias], (err, existingAlias) => {
        if (err) {
            throw err;
        } else if (existingAlias) {
            return res.status(400).send({
                error: "alias is already in use"
            })
        } else {
            const secretCode = String(Math.floor(Math.random() * 9999));
            conn.query(`INSERT INTO links (url, alias, secretCode) VALUES (?, ?, ?)`, [req.body.url, req.body.alias, secretCode], (err, result) => {
                if (err) {
                    throw err;
                } else {
                    return res.status(200).send({
                        "id": result.insertId,
                        "url": req.body.url,
                        "alias": req.body.alias,
                        "hitCount": 0,
                        "secretCode": secretCode
                    })
                }
            })
        }
    })

}

module.exports = apiController;