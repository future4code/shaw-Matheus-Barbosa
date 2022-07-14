import { app } from "./App";
import { GenHash } from "./Hash";
import { Login } from "./Login";
import { User } from "./User";

app.post("/user/signup", async (req,res) =>{
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1){
            throw new Error("Email Inválido")
        }
        if(!req.body.password || req.body.role){
            throw new Error ('informações incompletas')
        }

        const {email,password,role} = await req.body

        const encriptedPassword = await GenHash.generateHash(password)

        const user : User = new User(email,encriptedPassword,role)

        const token = user.getToken()
        res.status(200).send(token)
       
    } catch (error : any) {
        res.status(400).send(error.message)
    }
})

app.post("/user/login", async (req,res):Promise<void>=>{
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1){
            throw new Error("Senha ou Email inválido")
        }

        const {email,password,role} = req.body

        

        const busca : Login= new Login() 
        const user : any = await  busca.getUserByEmail(email)

        const compare = await GenHash.compareHash(password,user[0].pass)

        if (!compare) {
            throw new Error("Email ou Senha Inválido");
          }

        const token = User.generateToken(user[0].id,role)

        res.send(token).status(200)

    } catch (error:any) {
        res.status(400).send(error.message)
    }
})


app.get("/use/profile", (req,res)=>{

 
    console.log(req.headers.authorization)

    try {
    
    if (!req.headers.authorization){
        throw new Error("Deve enviar autorização ")
    }

    const result = Login.verifyToken(req.headers.authorization)

    res.send(result).status(200)
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }


})