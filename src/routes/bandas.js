var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('listar todas Bandas');
});

router.post('/', function(req, res){
    res.send('Criar Bandas');
});

router.get('/:id', function(req, res){
    res.send(`consulta o id da banda ${req.params.id}`);
});

router.put('/:id', function(req, res){
    res.send(`atualizar o id da banda ${req.params.id}`);
});

router.delete('/:id', function(req, res){
    res.send(`deletar o id da banda ${req.params.id}`);
});

module.exports = router;