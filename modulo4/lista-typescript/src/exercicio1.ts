
function retornaString (nome : string , data : string ):void {

    let date : string[]

    date = data.split("/")

    let name : string = nome

    console.log("Ola me chamo" + name + ", nasci no dia " + date[0] + " do mês " + date[1] + " do ano de " + date[2])
}

retornaString("matheus","28/08/1990")

