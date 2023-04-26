const express = require('express');
const connection = require('./src/database');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/posts', (req, res) => {
    const query = connection.query(
        `SELECT * FROM posts;`,
        (error, result) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).json({
                    posts: result,
                });
            }
        }
    )
});

app.post('/posts', (req, res) => {
    const data = req.body;
    const query = connection.query(
        `INSERT INTO posts (title, url) VALUES (?, ?);`,
        [data.title, data.url],
        (error, result) => {
            if (error) {
                res.status(500).send(error);
            } else if (result.affectedRows == 0) {
                res.status(400).send();
            } else {
                connection.query(`SELECT * FROM posts WHERE id=?`, [result.insertId], (error2, result2) => {
                    if (error2) {
                        res.status(500).send(error2);
                    } else {
                        res.status(200).json({
                            insertedRecord: result2
                        });
                    }
                });
            }
        }
    )
});

app.put('/posts/:id/upvote', (req, res) => {
    const id = req.params.id;

    const query = connection.query(
        `UPDATE posts SET score = score + 1 WHERE id=?`, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            } else {
                connection.query(`SELECT * FROM posts WHERE id=?`, [id], (error2, result2) => {
                    if (error) {
                        res.status(500).send(error2);
                    } else {
                        res.status(200).json({
                            increaseScore: result2
                        });
                    }
                });
            }
        }
    )
});

app.put('/posts/:id/downvote', (req, res) => {
    const id = req.params.id;

    const query = connection.query(
        `UPDATE posts SET score = score - 1 WHERE id=?`, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            } else {
                connection.query(`SELECT * FROM posts WHERE id=?`, [id], (error2, result2) => {
                    if (error) {
                        res.status(500).send(error2);
                    } else {
                        res.status(200).json({
                            decreaseScore: result2
                        });
                    }
                });
            }
        }
    )
});

app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;

    const query = connection.query(
        `SELECT * FROM posts WHERE id=?`, [id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            } else {
                connection.query(`DELETE FROM posts WHERE id=?`, [id], (error2, result2) => {
                    if (error) {
                        res.status(500).send(error2);
                    } else {
                        res.status(200).json({
                            deletedRecord: result
                        });
                    }
                });
            }
        }
    )
});

app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const query = connection.query(
        `UPDATE posts SET title=?, url=? WHERE id=?;`, [data.title, data.url, id], (error, result) => {
            if (error) {
                res.status(500).send(error);
            } else {
                connection.query(`SELECT * FROM posts WHERE id=?`, [id], (error2, result2) => {
                    if (error) {
                        res.status(500).send(error2);
                    } else {
                        res.status(200).json({
                            modifiedRecord: result2
                        });
                    }
                });
            }
        }
    )
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});