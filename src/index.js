var express = require("express")
var app = express()

app.get('/', function (req, res){
    res.send('SUPERGIG API');
});

app.all("*", function(req, res, next) {
    console.log("Acessou a pagina")
    next();
});

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
}); 