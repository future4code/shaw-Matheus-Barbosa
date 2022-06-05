import express from  'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003,()=>{
    console.log("running")
})

let listaUsuarios : object[] =  [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

// exercicio 1 
// utilizaremos o metodo GET
// A entidade q sera manipulada é o array de usuarios

app.get('/usuarios',(req,res)=>{
    res.send(listaUsuarios)
    res.status(201).end()
})

app.get('/usuario', (req,res)=>{

    try {
        
        if (req.query.type != 'ADMIN' && req.query.type != 'NORMAL'){
            throw new Error("Parametro nao existe")
        }

        let novoArray : object[] = listaUsuarios.filter((elemento : any)=>{
            return elemento.type === req.query.type
        })

        res.send(novoArray)
        res.status(201)


    } catch (error) {
        res.status(400).end()
    }
})

//exercicio 2 
// passei os parametros por query, pois é uma pesquisa
// utilizei um try/catch e fiz if para aceitar somente tipos validos.

app.get('/usuario', (req,res)=>{

    try {
        
        let busca : boolean = false

        let usuario : object[] = listaUsuarios.filter((elemento:any)=>{
           if (elemento.name === req.query.name){
               busca = true
               return elemento.name === req.query.name
           }else{
               return null
           }

       })

    //    if (usuario === null){
    //        throw new Error("Nao encontrado")
    //    }

       res.send(usuario)
       res.status(201)

    } catch (error) {
        res.status(400).end()
        
    }
})

// exercicio 3 = utilizei o parametro query


