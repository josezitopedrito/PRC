var Filmes = module.exports
const axios = require('axios')

var prefixes = `
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX owl: <http://www.w3.org/2002/07/owl#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX noInferences: <http://www.ontotext.com/explicit>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX c: <http://www.di.uminho.pt/prc2020/2020/2/cinema#>
`

var getLink = "http://localhost:7200/repositories/Cinema" + "?query=" 

normalize = function(response) {
    return response.results.bindings.map(obj =>
        Object.entries(obj)
            .reduce((new_obj, [k,v]) => (new_obj[k] = v.value, new_obj),
                    new Object()));
};

function jsonConcat(o1, o2) {
    for (var key in o2) {
     o1[key] = o2[key];
    }
    return o1;
}

Filmes.getLista = async function(){
    var query = `select ?f ?titulo ?duracao ?data ?lingua ?pais ?realizador ?rnome where {
        ?f a c:Filme .
        ?f c:título ?titulo .
        ?f c:duração ?duracao .
        ?f c:dataLançamento ?data .
        ?f c:temLíngua ?l .
        bind(strafter(str(?l),"cinema#") as ?lingua) .
        filter(?lingua = 'English') .
        ?f c:temPaísOrigem ?p . 
        bind(replace(strafter(str(?p),"cinema#"),"_"," ") as ?pais) .
        ?f c:temRealizador ?realizador .
        ?realizador c:nome ?rnome .
    } ` 
    var encoded = encodeURIComponent(prefixes + query)

    try{
        var response = await axios.get(getLink + encoded)
        return normalize(response.data)
    }
    catch(e){
        throw(e)
    } 
}

Filmes.getFilme = async function(id){
    var query = `select ?titulo ?duracao ?data ?lingua ?pais ?realizador ?rnome where {
        c:${id} a c:Filme .
        c:${id} c:título ?titulo .
        c:${id} c:duração ?duracao .
        c:${id} c:dataLançamento ?data .
        c:${id} c:temLíngua ?l .
        bind(strafter(str(?l),"cinema#") as ?lingua) .
        filter(?lingua = 'English') .
        c:${id} c:temPaísOrigem ?p . 
        bind(replace(strafter(str(?p),"cinema#"),"_"," ") as ?pais) .
        c:${id} c:temRealizador ?realizador .
        ?realizador c:nome ?rnome .
    } ` 

    var queryAtor = `select ?f ?nome ?sexo where { 
        ?f c:atuou c:${id}.
        OPTIONAL{
            ?f c:sexo ?sexo.
        }
    	OPTIONAL{
            ?f c:nome ?nome.
        }
        ?f a c:Ator.
    } `

    var queryPersonagem = `select ?f ?nome where { 
        ?f c:éPersonagemDe c:${id}.
    	OPTIONAL{
            ?f c:nome ?nome.
        }
        ?f a c:Personagem.
    } `

    var queryProdutor = `select ?f ?nome ?sexo where { 
        ?f c:produziu c:${id}.
        OPTIONAL{
            ?f c:sexo ?sexo.
        }
    	OPTIONAL{
            ?f c:nome ?nome.
        }
        ?f a c:Produtor.
    } `

    var queryGenero = `select ?f ?nomewhere { 
        c:${id} c:temGénero ?f.
    	OPTIONAL{
            ?f c:nome ?nome.
        }
    } `
    var encoded = encodeURIComponent(prefixes + query)
    var encodedAtor = encodeURIComponent(prefixes + queryAtor)
    var encodedPersonagem = encodeURIComponent(prefixes + queryPersonagem)
    var encodedProdutor = encodeURIComponent(prefixes + queryProdutor)
    var encodedGenero = encodeURIComponent(prefixes + queryGenero)

    try{
        var response = await axios.get(getLink + encoded)
        var responseAtor = await axios.get(getLink + encodedAtor)
        var responsePersonagem = await axios.get(getLink + encodedPersonagem)
        var responseProdutor = await axios.get(getLink + encodedProdutor)
        var responseGenero = await axios.get(getLink + encodedGenero)
        var filme = {filme:normalize(response.data)}
        var produtor = {produtor:normalize(responseProdutor.data)}
        var ator = {ator:normalize(responseAtor.data)}
        var genero = {genero:normalize(responseGenero.data)}
        var personagem = {personagem:normalize(responsePersonagem.data)}
        var resposta = {}
        resposta = jsonConcat(resposta,filme)
        resposta = jsonConcat(resposta,produtor)
        resposta = jsonConcat(resposta,ator)
        resposta = jsonConcat(resposta,genero)
        resposta = jsonConcat(resposta,personagem)
        return resposta
    }
    catch(e){
        throw(e)
    } 
}