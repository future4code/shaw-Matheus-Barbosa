// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  let area (altura*largura);
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Em que ano estamos?");
  const dataNascimento = prompt("qual sua data de nascimento");
  let idade = anoAtual - dataNascimento;
  console.log(idade);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso/(altura*altura);
  return imc;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("qual seu nome?");
  const idade = prompt("qual sua idade");
  const email = prompt("qual e o seu email");
  console.log("Meu nome é "+nome+", tenho "+idade+" anos,e o meu email é "+email+".");
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cores = prompt("digite suas tres cores favoritas");
  let array = cores.split(" ");
  console.log(array);


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const custoPorIngresso = custo/valorIngresso;
  return custoPorIngresso;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanho1 = string1.lenght();
  const tamanho2 = string2.length();
  return tamanho1 === tamanho2;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const tamanho = array.lenght();
  return array[tamanho];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = 1;
  const ultimoElemento = 2;
  array[0] = primeiroElemento;
  const tamanho = array.length();
  array[tamanho] = ultimoElemento;
  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    let string1 = string1.toLowerCase();
    let string2 = string2.toLowerCase();
    return string1 === string2;

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}