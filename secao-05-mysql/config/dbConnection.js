var mysql = require('mysql');

module.exports = function() {
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'mestre',
        database : 'portal_noticias'
    });
};