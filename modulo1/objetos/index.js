/*
Exercicios de interpretação

1.
a)
Matheus Nachtergaele
Denise Fraga
Object
horario:"19h"
canal:"Globo"

2.
a.
{nome:'Juca', idade: 3, raca:'SRD'}
{nome:'Juba', idade: 3, raca:'SRD'}
{nome:'Jubo', idade: 3, raca:'SRD'}

b. Ela faz uma cópia do objeto

3.
a.
false 
undefined

b. imprimiu o valor da propriedade backender e retornou undefined porque a propriedade altura nao foi definida.

*/

/*
//exercicio 1

const pessoa = {
    nome : "Ana Luiza",
    apelidos : ["naluiza,analu,nem"]
}

function imprimeApelidos (objeto){
    console.log("Eu sou " + objeto.nome + ", mas pode me chamar de : " + objeto.apelidos )
}

imprimeApelidos(pessoa)

const apelidosAna = {
    ...pessoa,
    apelidos : ["na","lu","iza"]
}

imprimeApelidos(apelidosAna)
*/

/*
//exercicio 2
const objeto1 ={
    nome: "roberto",
    idade: 29,
    profissao: "engenheiro"
}

const objeto2 ={
    nome: "marcelo",
    idade: 32,
    profissao: "motorista"
}

function imprimeInfo(objeto){
    let array = [objeto.nome,objeto.nome.length,objeto.idade,objeto.profissao,objeto.profissao.length]

    return array
}

console.log(imprimeInfo(objeto1))
console.log(imprimeInfo(objeto2));
*/

/*
//Exercicio 3
let carrinho = []

const manga = {
    nome : "manga",
    disponibilidade: true
}
const uva = {
    nome : "uva",
    disponibilidade: true
}
const pera = {
    nome : "pera",
    disponibilidade: true
}

function compra (fruta){
    carrinho.push(fruta);
    return carrinho
}

compra(uva)
compra(manga)
compra(pera)


console.log(carrinho)

*/


//Desafio1

function usuario(){
    const nome = prompt("qual seu nome?")
    const idade = prompt("qual sua idade?")
    const profissao = prompt("qual sua profissao?")

    const objetoUsuario ={
        nome: nome,
        idade:idade,
        profissao:profissao
    }
    return objetoUsuario
}

const usuario1 = usuario()

console.log(typeof usuario1)
console.log(usuario1)


/*
//desafio 2
const filme1 = {
    anoLancamento : 2009,
    nome : "Filme de 2009"
}

const filme2 = {
    anoLancamento : 1994,
    nome: "Filme de 1994"
}

function filmes(objeto1,objeto2){
    const lancamento = objeto1.anoLancamento < objeto2.anoLancamento
    const mesmoAno = objeto1.anoLancamento === objeto2.anoLancamento
    const msg1 = "O primeiro filme foi lançado antes do segundo?" + lancamento
    const msg2 = "O primeiro filme foi lancado no mesmo ano do segundo?" + mesmoAno

    return mensagens = [msg1,msg2]
    
}

let anoFilmes = filmes(filme1,filme2)

console.log(anoFilmes[0])
console.log(anoFilmes[1])

*/

/* 
//desafio 3
let carrinho = []

let manga = {
    nome : "manga",
    disponibilidade: true
}
let uva = {
    nome : "uva",
    disponibilidade: true
}
let pera = {
    nome : "pera",
    disponibilidade: true
}

function compra (fruta){
    carrinho.push(fruta);
    return carrinho
}

compra(uva)
compra(manga)
compra(pera)


console.log(carrinho)

// funçao do desafio

function estoque (fruta){
    fruta.disponibilidade = !fruta.disponibilidade

}

estoque(uva)
estoque(pera)
estoque(manga)

console.log(uva)
console.log(pera)
console.log(manga)
*/