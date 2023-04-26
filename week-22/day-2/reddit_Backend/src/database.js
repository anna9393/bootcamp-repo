const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '',
    port: '',
    user: '',
    database: 'reddit',
    password: ''
});

module.exports = connection;
