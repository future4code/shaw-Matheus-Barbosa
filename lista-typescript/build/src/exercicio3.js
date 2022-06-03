var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function catalogoFilme(nome, lancamento, genero, pontuacao) {
    const ponto = pontuacao;
    let filme = {
        nome: nome,
        lancamento: lancamento,
        genero: genero,
        pont: ponto
    };
    return filme;
}
//# sourceMappingURL=exercicio3.js.map