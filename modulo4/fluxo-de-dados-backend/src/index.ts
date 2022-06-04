import express from 'express'
import cors from 'cors'
import { arrayProdutos } from './data'
import { adicionaProduto } from './data'
import { atualizaArrayProdutos } from './data'


const app = express()

app.use(express.json())
app.use(cors())

app.listen('3003',()=>{
    console.log("server is running")
})

// Endpoints ///////////////////////////////////

app.get('/teste',(req,res)=>{
    res.send("server ok")
})

app.post('/addProduto',(req,res)=>{

    try {
        
            if (!req.body.name || !req.body.price || typeof req.body.name != "string" || typeof req.body.price != "number" || req.body.price <= 0){
                throw new Error("Erro")
                
            }

            adicionaProduto(req.body.name, req.body.price)
            res.send(arrayProdutos)

            res.status(201).end()
            

    } catch (error) {
        res.status(401).end()
    }

    
})

app.get('/produtos',(req,res)=>{
    res.send(arrayProdutos)
})

app.delete('/produtos/:id',(req,res)=>{
    let array : object[] = arrayProdutos.filter((elemento:any)=>{
        return elemento.id != req.params.id
    })

    atualizaArrayProdutos(array)

    res.send(arrayProdutos)
})

app.put('/price/:id',(req,res)=>{


    try {
        
        if (!req.query.price){
            throw new Error("erro")
        }

        let elementoId : boolean = false

        const filtro = arrayProdutos.map((elemento:any)=>{
            if (elemento.id === req.params.id){
                elementoId = !elementoId
                return elemento
            }
            return elemento
        })

        if (!elementoId){
            throw new Error("erro")
        }

        let array : object[] = arrayProdutos.map((elemento:any)=>{
            if (elemento.id === req.params.id){
                return {...elemento, price : req.query.price}
            } else {
                return elemento
            }
        })

        atualizaArrayProdutos(array)
        res.send(arrayProdutos)
        res.status(201).end()

    } catch (error) {
        res.status(401).end()
    }



    

})

/////////////////////////////////////////


// populando o array
adicionaProduto("banana",5)
adicionaProduto("uva",13)
adicionaProduto("tomate",9)
//


