```function contaOcorrencias(arrayDeNumeros, numeroEscolhido)
{
  let numeroAparicoes = 0
  for(i=0 ; i < arrayDeNumeros.length(); i++){
    if (arrayDeNumeros[i] === numeroEscolhido){
      numeroAparicoes++
    }
  }
  switch(numeroAparicoes){
    case 0:
      return "Número não encontrado"
    default:
      return  ´O número ${numeroEscolhido} aparece ${numeroAparicoes}x´
    
  }
}```