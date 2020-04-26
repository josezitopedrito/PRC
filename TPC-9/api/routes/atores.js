var express = require('express');
var router = express.Router();
var Atores = require('../controllers/atores')

/* GET home page. */
router.get('/', function(req, res, next) {
    Atores.getLista()
        .then(dados => res.jsonp(dados))
        .catch(error => res.jsonp(error))
});
router.get('/:id/personagens', function(req, res, next) {
    Atores.getPersonagens(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(error => res.jsonp(error))
});
router.get('/:id/filmes', function(req, res, next) {
    Atores.getFilmes(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(error => res.jsonp(error))
});
router.get('/:id', function(req, res, next) {
    Atores.getAtor(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(error => res.jsonp(error))
});

module.exports = router;
