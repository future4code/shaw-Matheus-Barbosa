/* 
Exercicios interpretação 

1)

a.
10
50

b.
Não aparecerá nada pois não armazenamos o resultado em nenhuma variavel nem imprimimos na tela

2)
a. Deixa a frase toda em minusculo e procura a string "cenoura"

b.
i - true
ii - true
iii - false

*/

//Exercicios de Escrita de Código 

/*
// exercicio 1

function souEu (){
    return "Eu sou Matheus, tenho 31 anos, moro em Pinheiral e sou estudante."
}

console.log(souEu())



let nome = "matheus"
let idade ="31"
let endereco ="pinheiral"
let profissao = "estudante"

function pessoa (nome,idade,endereco,profissao){
    return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e sou " + profissao + "." 
}


console.log(pessoa(nome,idade,endereco,profissao));

*/

/*
//Exercicio 2

function soma (a,b){
    return a + b;
}

const a = 10;
const b = 20;
console.log(soma(a,b));

function maior (a,b){
    return a > b;
}

console.log(maior(a,b));

function parOuImpar(a){
    let resto = a % 2;
    return resto === 0;
}

console.log(parOuImpar(b));

function frase (){
    let frase = prompt("digite uma frase");
    console.log(frase.length);
    console.log(frase.toLocaleLowerCase());

}
frase()

*/

/*

// Exercicio 3

const soma = (a,b) => a + b;
const diferenca = (a,b) => a - b ;
const multiplicacao = (a,b) => a*b;
const divisao = (a,b) => a/b;

let valor1 = prompt("digite o primeiro valor");
let valor2 = prompt("digite o segundo valor");
valor1 = Number(valor1);
valor2 = Number(valor2);

console.log("numeros inseridos: " +valor1+ " e " + valor2);
console.log("soma: " + soma(valor1,valor2));
console.log("Diferença: "+ diferenca(valor1,valor2));
console.log("Multiplicação: " + multiplicacao(valor1,valor2));
console.log("Divisão: " + divisao(valor1,valor2));

*/
/*
//Desafio 

let imprimir = (parametro) =>{
    console.log(parametro);
}

let imprimeSoma = (a,b) =>{
    const soma = a + b;
    imprimir(soma);
}

const a = 5;
const b = 10;

imprimeSoma(a,b);



function pitagoras(catA,catB){
    let hipotenusa = Math.pow(catA,2) + Math.pow(catB,2)
    hipotenusa = Math.sqrt(hipotenusa);
    imprimir(hipotenusa);
}

pitagoras(a,b);


*/