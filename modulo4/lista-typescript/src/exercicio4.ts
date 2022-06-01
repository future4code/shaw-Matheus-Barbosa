const arrayColabpradores = [
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

enum SETOR {
    marketing = "marketing",
    vendas = "vendas",
    financeiro = "financeiro"
}

type Colaborador = {
    nome : string,
    salario: number,
    setor : SETOR,
    presencial : boolean
}

function filtroPresencial (array : object[]){

    const arrayFiltrado = array.filter((elemento : any)=>{
        return elemento.setor === "marketing" && elemento.presencial === true
    }).map((elemento : any)=>{
        const col : Colaborador = {
            nome : elemento.nome,
            salario : elemento.salário,
            setor : elemento.setor,
            presencial : elemento.presencial
        }
        return col
    })

    return arrayFiltrado
}

console.table(filtroPresencial(arrayColabpradores))