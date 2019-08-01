var mysql = require('mysql');

var connMyql = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'mestre',
        database : 'portal_noticias'
    });
}

module.exports = function() {
    return connMyql;
}