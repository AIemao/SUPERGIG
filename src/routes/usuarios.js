var express = require('express');
var router = express.Router();


router.get('/', function (req, res){

    var usuarios = [
        {
            id: 1,
            nome: "Celio",
            email: "teste@teste.com"
        }
    ];

    res.send(usuarios);
});

router.post('/', function(req, res){
    res.send('criar');
}); 

router.get('/:id', function(req, res){
    res.send(`consulta o id ${req.params.id}`);
});  

router.put('/:id', function(req, res){
    res.send(`atualizar o id ${req.params.id}`);
});  

router.delete('/:id', function(req, res){
    res.send(`remove o id ${req.params.id}`);
});  

module.exports = router;    