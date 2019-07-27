var http = require("http");

var server = http.createServer(function (req, res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end('<html><body>Notificas de Tecnologia !</html></body>');
    }
    else if(categoria == '/moda'){
        res.end('<html><body>Portal de Moda !</html></body>');
    }
    else if(categoria == '/beleza'){
        res.end('<html><body>Portal de Beleza !</html></body>');
    }
    else {
        res.end('<html><body>Portal de Noticias !</html></body>');
    }
});

server.listen(3000);
