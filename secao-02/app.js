var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia");
});

app.get('/', function(req, res){
    res.render('secao/noticias');
});

app.get('/moda', function(req, res){
    res.render('secao/moda');
});

app.get('/beleza', function(req, res){
    res.render('secao/beleza');
});

// app.get("/", function(req, res){
//     res.send('<html><body>Portal de Noticias !</html></body>');
// });

app.listen(3000, function(){
    console.log('Servidor rodando com Express');
});