import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003,()=>{
    console.log("running")
})

app.get('/ping',(req,res)=>{
    res.send("pong")
})

app.post('/addAfazer',(req,res)=>{
    
    criaAfazer(req.body.id, req.body.afazer,req.body.user)

    res.send(arrayAfazeres)
})

app.post('/mudaStatus/:id',(req,res)=>{
    arrayAfazeres = editarStatus(req.params.id)

    res.send("status alterado")
})

app.get('/filtro',(req,res)=>{
    let status = req.body.status
    res.send(buscaAfazer(status))
})

app.delete('/delete/:id',(req,res)=>{
    arrayAfazeres = deletaAfazer(req.params.id)

    res.send(arrayAfazeres)
})

app.get('/afazerUsuario/:idUser',(req,res)=>{
    let array = afazerUsuario(req.params.idUser)
    res.send(array)
})
let arrayAfazeres : object[] = []




type todos = {
    id: string,
    afazer : string,
    status: boolean,
    iduser : string
}


function criaAfazer (id : string , afazer :string , user : string ){

    let fazer : object = {
        id:id,
        afazer:afazer,
        status: true,
        idUser : user
    }

    arrayAfazeres = [...arrayAfazeres,fazer]
}

function buscaAfazer (status : boolean){
    let arrayFiltrado : object[] = arrayAfazeres.filter((elemento : any)=>{
        return elemento.status = status
    })

    return arrayFiltrado
}

function editarStatus (id : string){
    let array : object[] = arrayAfazeres.map((elemento:any)=>{
        if (elemento.id === id){
            return {...elemento, status : !elemento.status}
        }
    })

    return array
}

function deletaAfazer (id : string){
    let array : object[] = arrayAfazeres.filter((elemento:any)=>{
        return elemento.id != id
    })

    return array
}

function afazerUsuario (id:string){
    return arrayAfazeres.filter((elemento:any)=>{
        return elemento.idUser === id
    })
}