var logs = function (req, res, next){
    console.log("Requisição:", req.url, req.params, req.query);
    next();
}

module.exports = logs;