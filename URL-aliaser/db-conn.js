const mySQL = require('mysql2');

const conn = mySQL.createConnection({
    host: "",
    port: "",
    user: "",
    database: 'url_aliaser',
    password: ""
});

conn.execute(
    `CREATE TABLE IF NOT EXISTS links(
    id INT NOT NULL AUTO_INCREMENT,
    url TEXT NOT NULL,
    alias TEXT NOT NULL,
    hitCount INT NOT NULL DEFAULT 0,
    secretCode CHAR(4) NOT NULL,
    PRIMARY KEY(id));`
);

module.exports = conn;