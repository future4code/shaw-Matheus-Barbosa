let operacao = process.argv[2]

let numero1 = Number(process.argv[3])

let numero2 = Number(process.argv[4])

switch(operacao){
    case "add" :
        console.log(`resultado : ${numero1+numero2}`)
        break;
    case "sub" :
        console.log(`resultado : ${numero1-numero2}`)
        break;

    case "mult" :
        console.log(`resultado : ${numero1*numero2}`)
        break;

    case "div" :
        console.log(`resultado : ${numero1/numero2}`)
        break;
    default:
        console.log("operação não encontrada")
}