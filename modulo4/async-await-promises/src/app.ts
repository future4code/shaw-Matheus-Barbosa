import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003,()=>{
    console.log("server is running")
})

export default app
