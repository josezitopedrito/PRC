var axios = require('axios')
var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
  axios.get("http://localhost:7200/repositories")
    .then(dados => {
      res.render('index', {lista: dados.data});
    })
    .catch(erro => {
        res.render('error', {error: erro})
    })
});

router.post('/query', function(req, res, next) {
  var prefixes = `
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX owl: <http://www.w3.org/2002/07/owl#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX noInferences: <http://www.ontotext.com/explicit>
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      PREFIX h: <http://www.semanticweb.org/ze/ontologies/2020/Advogados#>
  `
  var getLink = "http://localhost:7200/repositories/" + req.body.repos + "?query="

  var query = req.body.query
//console.log(req.body.query)
  var encoded = encodeURIComponent(prefixes + query)
/*
  axios.get(getLink + encoded)
    .then(dados => console.log(JSON.stringify(dados.data,null,2)))
    .catch(erro => console.log(erro))
*/

  axios.get(getLink + encoded)
    .then(dados => {
      console.log(getLink)
      res.render('index', {lista2: dados.data});
  })
  .catch(erro => {
      res.render('error', {error: erro})
  })
});

module.exports = router;