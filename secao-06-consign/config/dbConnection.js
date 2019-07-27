var mysql = require('mysql');

var connMyql = function(){
    console.log('Conexao com o database foi realizada !');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'mestre',
        database : 'portal_noticias'
    });
}

module.exports = function() {
    console.log('O autoload carregou o modulo de conexao com o database');
    return connMyql;
}