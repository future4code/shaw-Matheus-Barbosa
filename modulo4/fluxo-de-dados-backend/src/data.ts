
type produtos = {
    id : string,
    name : string,
    price : number
}

export let arrayProdutos : object[] = []

let idProdutos : number = 0


export function adicionaProduto( name:string , price:number):void{

    idProdutos++

    const id : string = idProdutos + ""

    const produto : produtos = {
        id:id,
        name:name,
        price:price
    }

    arrayProdutos = [...arrayProdutos,produto]
}

export function atualizaArrayProdutos (array : object[]):void{
    arrayProdutos = array
}
