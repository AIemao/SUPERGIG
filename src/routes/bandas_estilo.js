var express = require('express');
var router = express.Router();
var {bandas_estilo} = require('../database');

router.get('/', async function(req, res){
    var dados = await bandas_estilo.todos();
    res.send(dados);
});

router.post('/', async function(req, res){
    res.send(await bandas_estilo.inserir(req.body));
});

router.get('/:id', async function(req, res){
    var dados = await bandas_estilo.consultar(req.params.id);
    res.send(dados);
});

router.put('/:id', async function(req, res){
    res.send(await bandas_estilo.alterar(req.params.id, req.body));
});

router.delete('/:id', async function(req, res){
    res.send(await bandas_estilo.remover(req.params.id));
});

module.exports = router;