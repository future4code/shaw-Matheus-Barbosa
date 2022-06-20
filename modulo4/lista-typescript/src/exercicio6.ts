const clientes = 
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


function clientesNegativos (clientes : object[]){

    const filtro = clientes.map((elemento:any)=>{

        let soma : number = 0

        elemento.debitos.map((elemento:number)=>{
            
            soma = soma + elemento
        })



        let saldo : number = elemento.saldoTotal - soma

        return {...elemento, saldoTotal : saldo}
        
    }).filter((elemento:any)=>{
        return elemento.saldoTotal < 0
    })

    return filtro
}


console.table(clientesNegativos(clientes))