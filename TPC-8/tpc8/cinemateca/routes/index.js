var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filmes')
var Produtores = require('../controllers/produtores')
var Atores = require('../controllers/atores')
var Personagens = require('../controllers/personagens')

/* GET home page. */
router.get('/filmes', function(req, res, next) {
  Filmes.getLista()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de filmes: ${e}`))
});

router.get('/filmes/:id', function(req, res, next) {
  Filmes.getFilme(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de filmes: ${e}`))
});

router.get('/produtores', function(req, res, next) {
  Produtores.getLista()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de filmes: ${e}`))
});

router.get('/produtores/:id', function(req, res, next) {
  Produtores.getProdutor(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de filmes: ${e}`))
});

router.get('/atores', function(req, res, next) {
  Atores.getLista()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de filmes: ${e}`))
});

router.get('/atores/:id', function(req, res, next) {
  Atores.getAtor(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de filmes: ${e}`))
});

router.get('/personagens', function(req, res, next) {
  Personagens.getLista()
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de filmes: ${e}`))
});

router.get('/personagens/:id', function(req, res, next) {
  Personagens.getPersonagem(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(e => res.status(500).send(`Erro na listagem de filmes: ${e}`))
});

module.exports = router;
