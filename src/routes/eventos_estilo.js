var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('listar todas Eventos Estilo');
});

router.post('/', function(req, res){
    res.send('Criar Eventos Estilo');
});

router.get('/:id', function(req, res){
    res.send(`consulta o id do Evento ${req.params.id}`);
});

router.put('/:id', function(req, res){
    res.send(`atualizar o id do Evento ${req.params.id}`);
});

router.delete('/:id', function(req, res){
    res.send(`deletar o id do Evento ${req.params.id}`);
});

module.exports = router;