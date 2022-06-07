import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003,()=>{
    console.log("server running")
})

type movimentacoes = {
    valor:number,
    data: Date
}
type Conta = {
    nome:string,
    cpf:string,
    nascimento:Date,
    saldo:number,
    extrato: movimentacoes[]
}

let listaDeContas : Conta[] = []


app.post("/users",(req,res)=>{
    try {
        
        

        const [d,m,a] = req.body.nascimento.split("/")
        const dataNasc : Date = new Date(`${a}-${m}-${d}`)

        const dataAtual : number = Date.now()
        const dataNascimento : number = dataNasc.getTime()

        const idade : number = dataAtual - dataNascimento
        const idadeAtual : number = idade / 1000 /60 /60 /24 /365



        if (idadeAtual < 18){

            throw new Error("Você deve ser maior que 18 anos")

        }

        const novaConta : Conta = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            nascimento: dataNasc,
            saldo: 0,
            extrato: []
        }

        listaDeContas.push(novaConta)

       
        res.send("Conta Criada")
        res.status(201).end()
    
        

    } catch (error) {
        
        res.status(400).end()

    }
})

app.get("/users",(req,res)=>{
    try {

        res.send(listaDeContas)
        res.status(201)
        
    } catch (error) {
        res.status(400).send(error)
        }
})

app.put('/users/addSaldo/:cpf',(req,res)=>{

    try {

    
    
        listaDeContas = listaDeContas.map((elemento:any)=>{
            if (elemento.cpf === req.params.cpf){
                return {...elemento, saldo : elemento.saldo + req.body.valor}
            }else{
                return elemento
            }
        })
        res.status(201).end()
    
    } catch (error) {
        res.status(400).end()
    }
  
})

app.put('users/pagamento/:cpf',(req,res)=>{
    try {
    
        const {valor,data} = req.body


    
        listaDeContas = listaDeContas.map((elemento:any)=>{
            


            if (elemento.cpf === req.params.cpf){
                if (elemento.saldo >= valor){
                    return {...elemento , saldo : elemento.saldo - valor }
                }else{
                    throw new Error("saldo insuficiente")
                }
            }else{
                return elemento 
            }
        })
    } catch (error) {
        
    }
})

app.put('users/tranferencia/:cpf', (req,res)=>{


    const {cpf,valor} = req.body

    try {
        
        listaDeContas = listaDeContas.map((elemento:any)=>{
            

            let valorTrasferir : number 

            if (elemento.cpf === req.params.cpf){
                if (elemento.saldo >= valor){
                    return {...elemento , saldo : elemento.saldo - valor }

                }else{
                    throw new Error("saldo insuficiente")
                }
            }else{
                return elemento 
            }

            if (elemento.cpf === cpf){
                return {...elemento, saldo : elemento.saldo + valor}
            }else{
                return elemento
            }

            
        })

    } catch (error) {
        
    }
})