const arrayColabpradores = [
    { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
    { nome: "Maria", salário: 1500, setor: "vendas", presencial: false },
    { nome: "Salete", salário: 2200, setor: "financeiro", presencial: true },
    { nome: "João", salário: 2800, setor: "marketing", presencial: false },
    { nome: "Josué", salário: 5500, setor: "financeiro", presencial: true },
    { nome: "Natalia", salário: 4700, setor: "vendas", presencial: true },
    { nome: "Paola", salário: 3500, setor: "marketing", presencial: true }
];
var SETOR;
(function (SETOR) {
    SETOR["marketing"] = "marketing";
    SETOR["vendas"] = "vendas";
    SETOR["financeiro"] = "financeiro";
})(SETOR || (SETOR = {}));
function filtroPresencial(array) {
    const arrayFiltrado = array.filter((elemento) => {
        return elemento.setor === "marketing" && elemento.presencial === true;
    }).map((elemento) => {
        const col = {
            nome: elemento.nome,
            salario: elemento.salário,
            setor: elemento.setor,
            presencial: elemento.presencial
        };
        return col;
    });
    return arrayFiltrado;
}
console.table(filtroPresencial(arrayColabpradores));
//# sourceMappingURL=exercicio4.js.map