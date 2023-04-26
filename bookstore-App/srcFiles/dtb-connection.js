const mySQL = require('mysql2');

const conn = mySQL.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database: 'bookinfo',
    password: 'password'
});

module.exports = conn;