/*
// Exercicios de interpretação

1.
sera impresso o numero 10
o codigo faz a soma dos numeros da variavel i

2. 
a-
19
21
23
25
27
30

b- 
seria suficiente sim, poderia utilizar a função indexOf() antes do if

3.
*
**
***

*/

/*
//Exercicio 1
const bichinhos = Number(prompt("Quantos bichinhos de estimação vc tem?"))
let array = []
if (bichinhos === 0){
    console.log("Que pena! você pode adotar um pet!!")
}else{
    
    for(let i = 1; i<=bichinhos;i++){
        array.push(prompt("digite o nome do deu bichinho"))   
    }
    for (let i = 0; i< array.length ; i++){
        console.log(array[i])
    }
}

*/

/*
//Exercicio 2

// item a

const array = [1,5,22,55,41,65,84,64,33,38,74]

for (let i = 0 ; i < array.length ; i++){
    console.log(array[i])
}

//intem b

for (let i = 0 ; i < array.length ; i++){
    console.log(array[i]/10)
}

// item c

for (let i = 0 ; i < array.length ; i++){
    let novoArray = []
    let pares = array[i]%2
    
    if (pares === 0) {
        novoArray.push(array[i])     
    }
    for ( let i = 0; i < novoArray.length ; i++){
        console.log(novoArray[i])
    }
}

//item d

for (let i = 0 ; i < array.length ; i++){
    let novoArray = []
    novoArray.push("O elemento do index " + i + " é: " + array[i] )

    for (let i = 0 ; i < novoArray.length ; i++){
        console.log(novoArray[i])
    }
}
    
// item e
let maior = array[0]
    let menor = array[0]
for (let i = 0 ; i < array.length ; i++){
  
    if ( maior < array[i]){
        maior = array[i]
    }

    if (menor > array[i]){
        menor = array[i]
    }

}

console.log(maior)
console.log(menor)

*/
/*
// Desafio 1
console.log("Vamos Jogar!")
const numeroSecreto = prompt("Jogador 1 , digite o numero")
let descobrirNumero = prompt("Jogador 2, tente descobrir o numero")
let i = 1;

while (descobrirNumero !== numeroSecreto){

    
    if (numeroSecreto !== descobrirNumero){
        if (numeroSecreto < descobrirNumero){
            console.log("O numero chutado foi: " + descobrirNumero)
            console.log("Errou! O número escolhido é maior")
        }
        if (numeroSecreto>descobrirNumero){
            console.log("O numero chutado foi: " + descobrirNumero)
            console.log("Errou! O número escolhido é menor")
        }
    }
    i++
    descobrirNumero = prompt("Jogador 2, tente novamente descobrir o numero!!")
   
    if (descobrirNumero === numeroSecreto){
        console.log("Acertou!")
        console.log("O numero de tentativas foram: " + i)
    }
}
*/

/*
// Desafio 2

console.log("Vamos Jogar!")
const numeroSecreto =  Math.floor(Math.random()*100 +1)
let descobrirNumero = Number(prompt("digite um numero!"))
let i = 1;


if (descobrirNumero === numeroSecreto){
    console.log("Acertou!")
    console.log("O numero de tentativas foram: " + i)
}

while (descobrirNumero !== numeroSecreto){
    
    if (numeroSecreto !== descobrirNumero){
        if (numeroSecreto < descobrirNumero){
            console.log("O numero chutado foi: " + descobrirNumero)
            console.log("Errou! O número escolhido é maior")
        }
        if (numeroSecreto>descobrirNumero){
            console.log("O numero chutado foi: " + descobrirNumero)
            console.log("Errou! O número escolhido é menor")
        }
    }
    i++
    descobrirNumero = Number(prompt("Jogador, tente novamente descobrir o numero!!"))
    if (descobrirNumero === numeroSecreto){
        console.log("Acertou!")
        console.log("O numero de tentativas foram: " + i)
    }
}
*/