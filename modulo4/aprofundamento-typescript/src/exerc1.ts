
// A

// let minhaString : string

// minhaString = 0


// Acontece um erro pois a variavel minha string deve receber somente o tipo string


//B

let meuNumero : number | string

// Devemos utilizar tipo union para definirmos mais tipos possível a uma variavel

//C

enum CoresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type pessoa = {
    nome:string,
    idade:number,
    corFavorita: string
}

const matheus : pessoa = {
    nome : "matheus",
    idade : 31,
    corFavorita : CoresArcoIris.AZUL
}

const anaLuiza : pessoa = {
    nome : "Ana Luiza",
    idade : 30,
    corFavorita : CoresArcoIris.ANIL
}

const gloria : pessoa = {
    nome : "Gloria",
    idade : 76,
    corFavorita : CoresArcoIris.LARANJA
}





