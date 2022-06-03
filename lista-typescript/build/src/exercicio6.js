const clientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
function clientesNegativos(clientes) {
    const filtro = clientes.map((elemento) => {
        let soma = 0;
        elemento.debitos.map((elemento) => {
            soma = soma + elemento;
        });
        let saldo = elemento.saldoTotal - soma;
        return Object.assign(Object.assign({}, elemento), { saldoTotal: saldo });
    }).filter((elemento) => {
        return elemento.saldoTotal < 0;
    });
    return filtro;
}
console.table(clientesNegativos(clientes));
//# sourceMappingURL=exercicio6.js.map