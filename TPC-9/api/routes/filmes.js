var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filmes')

/* GET home page. */
router.get('/', function(req, res, next) {
    Filmes.getLista()
        .then(dados => res.jsonp(dados))
        .catch(error => res.jsonp(error))
});
router.get('/:id/generos', function(req, res, next) {
    Filmes.getGeneros(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(error => res.jsonp(error))
});
router.get('/:id/personagens', function(req, res, next) {
    Filmes.getPersonagens(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(error => res.jsonp(error))
});
router.get('/:id/linguas', function(req, res, next) {
    Filmes.getLinguas(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(error => res.jsonp(error))
});
router.get('/:id/atores', function(req, res, next) {
    Filmes.getAtores(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(error => res.jsonp(error))
});
router.get('/:id', function(req, res, next) {
    Filmes.getFilme(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(error => res.jsonp(error))
});

module.exports = router;