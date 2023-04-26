const mySQL = require('mysql2');

const conn = mySQL.createConnection({
    host: '',
    port: '',
    user: '',
    database: 'bookinfo',
    password: ''
});

module.exports = conn;
