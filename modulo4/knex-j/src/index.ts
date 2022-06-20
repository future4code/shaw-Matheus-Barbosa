import express from 'express'
import cors from 'cors'
import connection from './connection'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003,()=>{
    console.log("server is running")
})


//1 b
app.get("/actor",async (req,res) => {
    
    try {
        
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${req.query.name}'
        `)

        res.send(result)
        res.status(201)

    } catch (error) {
        console.log(error)
        res.send("erro inesperado")
        res.status(500)
    }
})

//1 C

app.get("/gender",async (req,res) => {
    
    try {
        
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE gender = '${req.query.gender}'
        `)

        res.send(result)
        res.status(201)

    } catch (error) {
        console.log(error)
        res.send("erro inesperado")
        res.status(500)
    }
})

// 2 A

app.post ("/actor/atualizaSalario/:id", async (req,res)=>{

    

    try {
        await connection("Actor").update({salary:req.body.salary}).where({id:req.params.id})

        res.send("OK").status(201)
    } catch (error) {
        res.send("erro inesperado").status(500)
    }


})

// 2 B
app.delete ("/actor/delete/:id", async (req,res)=>{

    try {

        await connection ('Actor').del().where({id:req.params.id})

        res.send("ok").status(201)
        
    } catch (error) {
        res.send(error).status(500)
    }
})

//2 C

app.get("/gender/salary/",async (req,res) => {
    
    try {
        
        const result = await connection ("Actor").sum('salary').where({gender: req.query.gen})

        res.send(result)
        res.status(201)

    } catch (error) {
        console.log(error)
        res.send("erro inesperado")
        res.status(500)
    }
})

//3 A

app.get("/actor/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const actor = await connection("Actor").where({id:id})
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err,
      });
    }
  });

// 3 B

app.get("/actors", async (req,res)=>{
    try {
        
        const result = await connection("Actor").count().where({gender : req.query.gender})

        res.send(result)
    } catch (error) {
        res.send(error).status(500)
    }
})


// 4 A

app.post ("/actor/atualizaSalario/:id", async (req,res)=>{

    

    try {
        await connection("Actor").update({salary:req.body.salary}).where({id:req.params.id})

        res.send("OK").status(201)
    } catch (error) {
        res.send("erro inesperado").status(500)
    }


})

// 4 B
app.delete ("/actor/delete/:id", async (req,res)=>{

    try {

        await connection ('Actor').del().where({id:req.params.id})

        res.send("ok").status(201)
        
    } catch (error) {
        res.send(error).status(500)
    }
})




