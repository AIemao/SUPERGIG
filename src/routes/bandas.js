var express = require('express');
var router = express.Router();
var {bandas} = require('../database')


router.get('/', async function(req, res){
    var dados = await bandas.todos();
    res.send(dados);
});

router.post('/', async function(req, res){
    res.send(await bandas.inserir(req.body));
});

router.get('/:id', async function(req, res){
    var dados = await bandas.consultar(req.params.id);
    res.send(dados);
});

router.put('/:id', async function(req, res){
    res.send(await bandas.alterar(req.params.id, req.body));
});

router.delete('/:id', async function(req, res){
    res.send(await bandas.remover(req.params.id));
});

module.exports = router;