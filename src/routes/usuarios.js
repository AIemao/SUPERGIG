var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var { usuarios } = require('../database');


router.get('/', async function (req, res){
    var dados = await usuarios.todos();
    res.send(dados);
});

router.post('/', async function(req, res){
    res.send(await usuarios.inserir(req.body));
}); 

router.get('/:id', async function(req, res){
    var dados = await usuarios.consultar(req.params.id);
    res.send(dados);
});  

router.put('/:id', async function(req, res){
    res.send(await usuarios.alterar(req.params.id, req.body));
});  

router.delete('/:id', async function(req, res){
    res.send(await usuarios.remover(req.params.id));
});  

module.exports = router;    