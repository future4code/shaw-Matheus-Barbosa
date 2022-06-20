function obterEstatisticas(numeros : number[]) {

    const numerosOrdenados : number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma : number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior : numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// A  = a entrada é um array de numeros e a saida um objeto de estatisticas sobre o array

// b = um array de numeros ordenados, uma variavel soma q recebe um number

// C

type AmostraDeIdades = {
    numeros : number[],
    obterEstatisticas : (numeros:number[])=> object 
}

