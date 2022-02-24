
/*
// exercicios de interpretação

1.
a- verifica se um numero é par ou impar
b- para os numeros pares
c-para os numeros impares

2.
a- para definir o preço da fruta
b. O preço da fruta Maçã é R$ 2.25
c. O preço da fruta Pêra é R$ 5.5

3.
a- pedindo ao usuario para digitar um numero e transformando ele de string em number
b- se fosse 10 aparecera "Esse numero passou no teste", caso seja -10 nada será impresso.
c- sim pois a variavel mensagem será undefined, pois ela foi criada no bloco do if, e caso ele nao seja exercutado a variavel nao sera criada

*/

/*
//Exercicio 1

let idade = prompt("Qual a sua idade?")
idade = Number(idade)

if (idade >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("você não pode dirigir")
}
*/
/*
//Exercicio 2

let turno = prompt("Digite o seu turno: (M,V ou N)")

if (turno === "M" ){
    console.log("Bom dia!")
}
if (turno === "V"){
    console.log("Boa tarde!")

}
if (turno === "N"){
    console.log("Boa noite!")
}
*/

/*
//Exercicio 3

let turno = prompt("Digite seu turno")

switch(turno){
    case "M":
        console.log("bom dia!")
        break;
    case "V":
        console.log("boa tarde")
        break;
    case "N":
        console.log("boa noite")
        break;
    default:
        console.log(" voce deve digitar seu turno , M V ou N")
        break;
}
*/

/*

let genero = prompt("Qual o genero do filme")
genero = genero.toUpperCase()
let preco = Number(prompt("qual o preço do ingresso"))

if (genero === "FANTASIA" && preco <= 15){
    console.log("Bom filme")
}else{
    console.log("Escolha outro filme :(")
}
*/

/*
//Desafio 1

let genero = prompt("Qual o genero do filme")
genero = genero.toUpperCase()
let preco = Number(prompt("qual o preço do ingresso"))
let lanchinho = prompt("qual o lanche você vai querer?")

if (genero === "FANTASIA" && preco <= 15){
    console.log("Bom filme")
    console.log("Aproveite o/a " + lanchinho)
}else{
    console.log("Escolha outro filme :(")
}
*/ 

const compra = {
    nome : prompt("Digite seu nome"),
    tipoJogo : prompt("Qual o tipo de jogo (IN ou DO)?"),
    etapa : prompt("Qual o a etapa?(SF,DT ou FI"),
    categoria : prompt("Qual a categoria (1,2,3,4)?"),
    quantidade: prompt("quantos ingressos você deseja?")
}

const semiFinais = {
    cat1 : 1320,
    cat2 : 880,
    cat3 : 550,
    cat4 : 220
}
const decisaoTerceiro = {
    cat1 : 660,
    cat2 : 440,
    cat3 : 330,
    cat4 : 170
}
const final = {
    cat1 : 1980,
    cat2 : 1320,
    cat3 : 880,
    cat4 : 330
}

const dolar = 4.1

function CompraIngresso(nome,tipoJogo,etapa,categoria,quantidade){
    console.log("--- Dados da Compra ---")
    console.log("Nome do Cliente: "+nome)
    tipoJogo = tipoJogo.toUpperCase()
    switch(tipoJogo){
        case "IN":
            console.log("Tipo de jogo: Internacional")
            break
        case "DO":
            console.log("Tipo de jogo: Nacional")
            break
    }
    etapa = etapa.toUpperCase()
    switch(etapa){
        case "SF":
            console.log("Etapa do jogo: SemiFinal")
            break
         case "FN":
            console.log("Etapa do jogo: Final")
            break
         case "DT":
            console.log("Etapa do jogo: Terceiro Lugar")
            break
    }
    categoria = Number(categoria)
    quantidade = Number(quantidade)
    console.log("Categoria: "+categoria)
    console.log("Quantidade de Ingressos: "+quantidade)
    console.log("--- Valores ---")

    switch(etapa){
        case "SF":
            let objeto = semiFinais
            let ingresso 
            let total
            switch(categoria){
                case 1 :  
                     ingresso = objeto.cat1
                     total = ingresso*quantidade
                    if (tipoJogo === "IN"){
                        ingresso = ingresso*dolar
                        total = total*dolar
                        console.log("Valor do ingresso: U$ "+ingresso)
                    console.log("Valor total: U$ "+total)
                    }else{
                    console.log("Valor do ingresso: R$ "+ingresso)
                    console.log("Valor total: R$ "+total)
                    }
                    break
                case 2 :  
                     ingresso = objeto.cat2
                     total = ingresso*quantidade
                    if (tipoJogo === "IN"){
                        ingresso = ingresso*dolar
                        total = total*dolar
                        console.log("Valor do ingresso: U$ "+ingresso)
                    console.log("Valor total: U$ "+total)
                    }else{
                    console.log("Valor do ingresso: R$ "+ingresso)
                    console.log("Valor total: R$ "+total)
                    }
                    break
                    case 3 :  
                     ingresso = objeto.cat3
                     total = ingresso*quantidade
                    if (tipoJogo === "IN"){
                        ingresso = ingresso*dolar
                        total = total*dolar
                        console.log("Valor do ingresso: U$ "+ingresso)
                    console.log("Valor total: U$ "+total)
                    }else{
                    console.log("Valor do ingresso: R$ "+ingresso)
                    console.log("Valor total: R$ "+total)
                    }
                    break
                    case 4 :  
                     ingresso = objeto.cat4
                     total = ingresso*quantidade
                    if (tipoJogo === "IN"){
                        ingresso = ingresso*dolar
                        total = total*dolar
                        console.log("Valor do ingresso: U$ "+ingresso)
                    console.log("Valor total: U$ "+total)
                    }else{
                    console.log("Valor do ingresso: R$ "+ingresso)
                    console.log("Valor total: R$ "+total)
                    }
                    break
                    
            }
            break
            case "DT":
                 let ingresso2
                 let total2
                switch(categoria){
                
                    case 1 :  
                         ingresso2 = decisaoTerceiro.cat1
                         total2 = ingresso2*quantidade
                        if (tipoJogo === "IN"){
                            ingresso2 = ingresso2*dolar
                            total2 = total2*dolar
                            console.log("Valor do ingresso: U$ "+ingresso2)
                        console.log("Valor total: U$ "+total2)
                        }else{
                        console.log("Valor do ingresso: R$ "+ingresso2)
                        console.log("Valor total: R$ "+total2)
                        }
                        break
                        case 2 :  
                         ingresso2 = decisaoTerceiro.cat2
                         total2 = ingresso2*quantidade
                        if (tipoJogo === "IN"){
                            ingresso2 = ingresso2*dolar
                            total2 = total2*dolar
                            console.log("Valor do ingresso: U$ "+ingresso2)
                        console.log("Valor total: U$ "+total2)
                        }else{
                        console.log("Valor do ingresso: R$ "+ingresso2)
                        console.log("Valor total: R$ "+total2)
                        }
                        break
                        case 3 :  
                         ingresso2 = decisaoTerceiro.cat3
                         total2 = ingresso2*quantidade
                        if (tipoJogo === "IN"){
                            ingresso2 = ingresso2*dolar
                            total2 = total2*dolar
                            console.log("Valor do ingresso: U$ "+ingresso2)
                        console.log("Valor total: U$ "+total2)
                        }else{
                        console.log("Valor do ingresso: R$ "+ingresso2)
                        console.log("Valor total: R$ "+total2)
                        }
                        break
                        case 4 :  
                         ingresso2 = decisaoTerceiro.cat4
                         total2 = ingresso2*quantidade
                        if (tipoJogo === "IN"){
                            ingresso2 = ingresso2*dolar
                            total2 = total2*dolar
                            console.log("Valor do ingresso: U$ "+ingresso2)
                        console.log("Valor total: U$ "+total2)
                        }else{
                        console.log("Valor do ingresso: R$ "+ingresso2)
                        console.log("Valor total: R$ "+total2)
                        }
                        break
                        
                }
                break
             case "FI":
                 let ingresso3 
                 let total3 
                
                 switch(categoria){
                    case 1 :  
                         ingresso3 = final.cat1
                         total3 = ingresso3*quantidade
                        if (tipoJogo === "IN"){
                            ingresso3 = ingresso3*dolar
                            total3 = total3*dolar
                            console.log("Valor do ingresso: U$ "+ingresso3)
                        console.log("Valor total: U$ "+total3)
                        }else{
                        console.log("Valor do ingresso: R$ "+ingresso3)
                        console.log("Valor total: R$ "+total3)
                        }
                        break
                        case 2 :  
                         ingresso3 = final.cat2
                         total3 = ingresso3*quantidade
                        if (tipoJogo === "IN"){
                            ingresso3 = ingresso3*dolar
                            total3 = total3*dolar
                            console.log("Valor do ingresso: U$ "+ingresso3)
                        console.log("Valor total: U$ "+total3)
                        }else{
                        console.log("Valor do ingresso: R$ "+ingresso3)
                        console.log("Valor total: R$ "+total3)
                        }
                        break
                        case 3 :  
                         ingresso3 = final.cat3
                         total3 = ingresso3*quantidade
                        if (tipoJogo === "IN"){
                            ingresso3 = ingresso3*dolar
                            total3 = total3*dolar
                            console.log("Valor do ingresso: U$ "+ingresso3)
                        console.log("Valor total: U$ "+total3)
                        }else{
                        console.log("Valor do ingresso: R$ "+ingresso3)
                        console.log("Valor total: R$ "+total3)
                        }
                        break
                        case 4 :  
                         ingresso3 = final.cat4
                         total3 = ingresso3*quantidade
                        if (tipoJogo === "IN"){
                            ingresso3 = ingresso3*dolar
                            total3 = total3*dolar
                            console.log("Valor do ingresso: U$ "+ingresso3)
                        console.log("Valor total: U$ "+total3)
                        }else{
                        console.log("Valor do ingresso: R$ "+ingresso3)
                        console.log("Valor total: R$ "+total3)
                        }
                        break
                        
                }
                break
    }
    
}

CompraIngresso(compra.nome,compra.tipoJogo,compra.etapa,compra.categoria,compra.quantidade)

