var app = require('./config/server');

// require('./app/routes/noticias')(app);

// require('./app/routes/home')(app);

// require('./app/routes/formulario_inclusao_noticias')(app);

app.listen(3000, function(){
    console.log('Servidor Online');
});