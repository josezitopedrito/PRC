var atores = require('./JSONs/atores.json')
var filmes = require('./JSONs/filmes.json')
var realizadores = require('./JSONs/realizadores.json')

function normalize(response) {
    return response.results.bindings.map(obj =>
        Object.entries(obj)
            .reduce((new_obj, [k,v]) => (new_obj[k] = v.value, new_obj),
                    new Object()));
};

var Atores = normalize(atores)
var Filmes = normalize(filmes)
var Paises = []
Filmes.map(fl =>{
    if(typeof fl.country !='undefined' && typeof fl.language !='undefined'){
        let newItem = {country:fl.country,language:fl.language}
        if(!Paises.find(o => o.country === fl.country && o.language === fl.language))
            Paises.push(newItem)
    }
})

var Realizadores = normalize(realizadores)

var Linguas = []

Paises.map(cn =>{
    if(Linguas.indexOf(cn.language) === -1)
        Linguas.push(cn.language)
})

function printAtor (name,gender){
    return `###  http://www.semanticweb.org/ze/ontologies/2020/cinema#${name}
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#${name}> rdf:type owl:NamedIndividual ,
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#Ator> ,
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#${gender == 'male' ? 'AtorMasculino' : 'Atriz'}> ,
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#Pessoa> ;
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#sexo> "${gender == 'male' ? 'M' : 'F'}" .`
}

function printPais (name){
    return `###  http://www.semanticweb.org/ze/ontologies/2020/cinema#${name}
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#${name}> rdf:type owl:NamedIndividual ,
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#País> .`
}

function printLingua (name){
    return `###  http://www.semanticweb.org/ze/ontologies/2020/cinema#${name}
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#${name}> rdf:type owl:NamedIndividual ,
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#Língua> .`
}

function printRealizador (name,gender){
    return `###  http://www.semanticweb.org/ze/ontologies/2020/cinema#${name}
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#${name}> rdf:type owl:NamedIndividual ,
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#Pessoa> ,
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#Realizador> ;
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#sexo> "${gender == 'male' ? 'M' : 'F'}" .`
}

function printFilme (name,nfname){
    return `###  http://www.semanticweb.org/ze/ontologies/2020/cinema#${name}
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#${name}> rdf:type owl:NamedIndividual ,
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#Filme> ,
    <http://www.semanticweb.org/ze/ontologies/2020/cinema#título> "${nfname}" .`
}

function printAll(){
    Atores.map(ac =>{
        console.log(printAtor(ac.name.replace(" ","_"),ac.gender))
        console.log("\n\n")
    })
    Realizadores.map(dr =>{
        console.log(printRealizador(dr.name.replace(" ","_"),dr.gender))
        console.log("\n\n")
    })
    Paises.map(cn =>{
        console.log(printPais(cn.country.replace(" ","_")))
        console.log("\n\n")
    })
    Linguas.map(la =>{
        console.log(printLingua(la.replace(" ","_")))
        console.log("\n\n")
    })
    Filmes.map(fl =>{
        console.log(printFilme(fl.name.replace(" ","_"),fl.name))
        console.log("\n\n")
    })
}

printAll()