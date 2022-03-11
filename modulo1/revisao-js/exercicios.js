// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length()
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let novoarray =[]
    for (i= array.length() ; i !== 0 ; i--){
      novoarray.push(array[i])
    }
    return novoarray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) =>{
      if (a > b) {
          return 1
      }
      if (a < b){
          return -1
      }
      return 0
  })
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
  return array.filter((elemento) => {
     return (elemento % 2) === 0
  })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((elemento) => {
        return (elemento % 2) === 0
     }).map((elemento) => {
         return Math.pow(elemento,2)
     })
}

// EXERCÍCIO 06 
function retornaMaiorNumero(array) {
    let novoarray = array.sort((a,b) =>{
        if (a > b) {
            return 1
        }
        if (a < b){
            return -1
        }
        return 0
    })
    return novoarray[novoarray.length()]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menor
    let objeto = {
        maiorNumero : undefined,
        maiorDivisivelPorMenor : undefined,
        diferenca : undefined
    }

    if (num1 > num2){
        objeto.maiorNumero = num1
        menor = num2
    }else{
        objeto.maiorNumero = num2
        menor = num1
    }
    let mod = maiorDivisivelPorMenor % menor
    if (mod === 0){
        maiorDivisivelPorMenor = true
    }else{
        maiorDivisivelPorMenor = false
    }

    objeto.diferenca = objeto.maiorNumero - menor

    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let pares = []
   let numeros = 0;
   for (i=0; i < n ; i++){
       pares.push(numeros)
       numeros = numeros + 2;
   }
   return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }
    if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        return "Escaleno"
    }else{
        return "Isósceles"
    }
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novoarray = array.sort((a,b) =>{
        if (a > b) {
            return 1
        }
        if (a < b){
            return -1
        }
        return 0
    })
    let segudoMaiorEMenor = [novoarray[1],novoarray[novoarray.length()-1]]
    return segudoMaiorEMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return "Venha assistir ao filme " +filme.nome+ ", de " +filme.ano+ ", dirigido por "+filme.diretor+ " e estrelado por "+filme.atores+ "."
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {
       ...pessoa,
       nome:"ANÔNIMO"
   }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((elemento)=>{
       return elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((elemento)=>{
        return !(elemento.altura >= 1.5 && elemento.idade > 14 && elemento.idade < 60)
    })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((elemento)=>{
        let saldo
        for(i=0; i<= elemento.compras.length(); i++){
             {
               saldo = elemento.saldoTotal = elemento.saldoTotal - elemento.compras           

            }
            return {
                ...contas,
                saldoTotal: saldo,
                compras: []
            }
            
        }       
        
    })
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   return consultas.sort((a,b)=>{
       if (a.nome > b.nome){
           return 1
       }
       if (a.nome < b.nome){
           return -1
       }else{
           return 0
       }
   })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((a,b)=>{
        if (a.dataDaConsulta.getTime() > b.dataDaConsulta.getTime()){
            return 1
        }
        if (a.dataDaConsulta.getTime() < b.dataDaConsulta.getTime()){
            return -1
        }else{
            return 0
        }
    })
}
