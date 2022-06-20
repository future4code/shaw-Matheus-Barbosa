enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


function catalogoFilme (nome : string , lancamento : string , genero : GENERO , pontuacao? : number){
    
    const ponto = pontuacao
    type catalogo ={
        nome : string,
        lancamento : string,
        genero : string ,
        pont : number
    }

    let filme : catalogo = {
        nome: nome,
        lancamento:lancamento,
        genero:genero,
        pont: ponto
    }

    return filme

} 