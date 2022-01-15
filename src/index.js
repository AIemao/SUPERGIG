var express = require('express')
var morgan = require('morgan')
var logs = require('./middleware/log');

var app = express()

app.use(morgan('tiny'))
app.use(logs);

var usuarios = require('./routes/usuarios');
var bandasestilo = require('./routes/bandas_estilo');
var bandas = require('./routes/bandas');
var eventosestilo = require('./routes/eventos_estilo');
var eventos = require('./routes/eventos');
//const morgan = require("morgan");

app.use('/usuarios', usuarios);
app.use('/bandas_estilo', bandasestilo);
app.use('/bandas', bandas);
app.use('/eventos_estilo', eventosestilo);
app.use('/eventos', eventos);


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