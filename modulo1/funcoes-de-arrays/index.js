/*

//Exercicios de interpretação

1. 
a- 
sera impresso um array com os objetos

2.
a-
será impresso um array somente com o item nome dos objetos

3.
a-
retorna os objetos cujo apelido não é chijo

*/
/*
//exercicio 1

//A
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomesCachorrinhos = pets.map((item,index,array) =>{
    return item.nome;
 })

 console.log(nomesCachorrinhos)

 //B
 const cachorrosSalsicha = pets.filter((item,index,array)=>{
     return item.raca === "Salsicha"
 })

 console.log(cachorrosSalsicha)

 //C

 let poodles = pets.filter((item) => {
      return item.raca === "Poodle"        
 }).map((item)=>{
    return "Você ganho um cupom de desconto de 10% para tosar o/a "+item.nome
  })
 console.log(poodles)

 */

 /*
 // Exercicio 2

 
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //A

 const nomeItens = produtos.map((item)=>{
     return item.nome
 })

 console.log(nomeItens)

 //B

 let descontoItens = produtos.map((item)=>{
     return {
         nome: item.nome,
         categoria: item.categoria,
         preco: item.preco = item.preco -(item.preco*0.05)
     }
 })

 console.log(descontoItens)

 //C

 const bebidas = produtos.filter((item)=>{
    return item.categoria === "Bebidas"
 })

 console.log(bebidas)

 //D
 const produtosYpe = produtos.filter((item)=>{
     return item.nome.includes("Ypê")
 })

 console.log(produtosYpe)

 //E

 const compreProdutosYpe = produtos.filter((item)=>{
    return item.nome.includes("Ypê")
}).map((item)=>{
    return "Compre " + item.nome + " por " + item.preco
})

console.log(compreProdutosYpe)

*/

/*

// DESAFIO

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 let nomePokemons = pokemons.sort(function (x,y){
    let a = x.nome.toUpperCase()
    let b = y.nome.toUpperCase()
      if (a===b){
          return 0
      }
      if (a > b){
          return 1
      }else{
          return -1
      }
   // return a === b ? 0 : a > b ? 1 : -1
 })
 console.log(nomePokemons)

let tiposPokemons = pokemons.map(function(item){
    return item.tipo
})

let tiposPokemons2 = tiposPokemons.filter((item,index)=>{
    
    return tiposPokemons.indexOf(item) === index

})

console.log(tiposPokemons2)

*/