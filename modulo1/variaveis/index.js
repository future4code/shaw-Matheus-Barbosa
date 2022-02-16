/*
1) 
10
10 5

2)
10 10 10

3)
let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let ganhoDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${ganhoDiario/horasTrabalhadas} por hora`)
*/

//exercicio 1

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)
/* o tipo undefined foi exibido porque não declaramos um valor para a variável portanto o js nao definiu nenhum tipo */

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)
/* o prompt sempre atribui strings*/

console.log("Olá",nome,"você tem",idade,"anos")

//exercicio 2

let celular = prompt("Você tem celular?")
let tablet = prompt("Você tem tablet?")
let notebook = prompt("Você tem notebook?")

console.log("Você tem celular? - ",celular)
console.log("Você tem tablet? - ",tablet)
console.log("Você tem notebook? - ",notebook)

//exercicio 3

let a = 10
let b = 25
let temporaria

temporaria = a
a = b
b = temporaria

console.log("O valor de a é ",a)
console.log("O valor de b é ",b)

// desafio 

let x = prompt("Digite o valor de x")
let y = prompt("Digite o valor de y")

x = Number(x)
y = Number(y)

let soma = x+y
let multiplicacao = x*y

console.log("X + Y = ",soma)
console.log("X * Y = ",multiplicacao)

