var Produtores = module.exports
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

Produtores.getLista = async function(){
    var query = `select ?f ?nome ?sexo ?filme where { 
        ?f a c:Produtor.
        OPTIONAL{
            ?f c:sexo ?sexo
        }
    	OPTIONAL{
            ?f c:nome ?nome
        } 
        ?f c:produziu ?filme.
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

Produtores.getProdutor = async function(id){
    var query = `select ?f ?nome ?sexo ?filme where { 
        c:${id} a c:Produtor.
        OPTIONAL{
            c:${id} c:sexo ?sexo
        }
    	OPTIONAL{
            c:${id} c:nome ?nome
        } 
        c:${id} c:produziu ?filme.
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