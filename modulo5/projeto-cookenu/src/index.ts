import { verify } from "jsonwebtoken";
import { app } from "./Class/App";
import { CreateUser } from "./Class/CreateUser";
import { TokenAndHash } from "./Class/TokenAndHash";
import { Login } from "./Class/Login";
import { User } from "./Class/User";
import { Verify } from "./Class/Verify";
import { CreateRecipe } from "./Class/CreateRecipes";
import { Recipes } from "./Class/Recipes";



app.post('/user/signup', async (req,res)=>{

    try {

        
        const {cpf,name,email,password,role} = req.body

        if(!cpf||!name||!email||!password||!role){
            throw new Error("Requisição incompleta")
        }
        if (!req.body.email || email.indexOf("@") === -1){
            throw new Error("Email Inválido")
        }

        const pass : TokenAndHash = new TokenAndHash()
        const hashPassword = await pass.generateHash(password)
        const user : CreateUser = new CreateUser(cpf,name,email,hashPassword,role)


        
        await user.createUser()
        const token = user.getToken()
        res.status(200).send(token)

        
    } catch (error:any) {
        res.status(400).send(error.message)
    }



})


app.post('/user/login', async (req,res)=>{


    try {


        const {cpf,password} = req.body

        if(!cpf || !password){
            throw new Error("Dados incompletos")
            
        }

        const login : Login = new Login(cpf,password)
        const token = await login.verifyLogin()

        res.send(token).status(200)
        
    } catch (error:any) {
        res.send(error.message).status(400)
    }
})

//refatorar os 2 gets seguintes para ter uma classe que verifica token e retorna o id 
app.get('/user/myProfile', async (req,res)=>{
    try {
       
        if (!req.headers.authorization){
            throw new Error("falta de autorização")
        }
        const user : User = new User ()
        const auth = req.headers.authorization 
        const data = user.verifyToken(auth)
        const result = await user.getProfileById(data)
        const dataUser = {
            id : result[0].id,
            name : result[0].name,
            email : result[0].email
        }

        
        res.send(dataUser).status(200)
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

app.get('/user/:id',async(req,res)=>{
    try {
        
        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)
        if(!data){
            throw new Error("autorização inválida")
        }

        const result = await user.getProfileById(req.params.id)
        const dataUser = {
            id : result[0].id,
            name : result[0].name,
            email : result[0].email
        }

        res.send(dataUser).status(200)
        

    } catch (error:any) {
        res.status(400).send(error.message)
    }

})

app.post('/user/createRecipe', async (req,res)=>{
    try {

        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)
        if(!data){
            throw new Error("autorização inválida")
        }

        const {name,makings,description} = req.body

        const newRecipe : CreateRecipe = new CreateRecipe(data,name,makings,description)

        res.status(200).send("receita enviada")

        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

app.get('/user/getRecipe/:id', async (req,res)=>{


        try {

            const user : User = new User ()
            const auth = req.headers.authorization 
            let data = undefined
            data = user.verifyToken(auth)
            if(!data){
                throw new Error("autorização inválida")
            }
            const recipe : Recipes = new Recipes()
    
            const getRecipe = await recipe.selectRecipeById(req.params.id)

            res.status(200).send(getRecipe)
            
        } catch (error:any) {
            res.status(400).send(error.message)
        }
})

// criar validação de somente o dono da receita poder deleta-la e o deletar nao esta funcionando
app.delete('/user/recipes/:id', async (req,res)=>{


    try {

        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)
        if(!data){
            throw new Error("autorização inválida")
        }
        const recipe : Recipes = new Recipes()

        await recipe.deleteRecipe(req.params.id)

        res.status(200).send("deletada com sucesso")
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

app.get('/getAllRecipes',async (req,res)=>{
    try {

        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)
        if(!data){
            throw new Error("autorização inválida")
        }
        const recipe : Recipes = new Recipes()

        const allRecipes = await recipe.getRecipes()

        res.status(200).send(allRecipes)
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

app.get('/getAllRecipes/:id',async (req,res)=>{
    try {

        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)
        if(!data){
            throw new Error("autorização inválida")
        }
        const recipe : Recipes = new Recipes()

        const allRecipes = await recipe.getAllRecipesById(req.params.id)

        res.status(200).send(allRecipes)
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

//Não atualizou , possivel erro de sql, assim como no delete
app.post('/editRecipe/:id',async (req,res)=>{
    try {

        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)
        if(!data){
            throw new Error("autorização inválida")
        }

        const {name,makings,description} = req.body
        const recipe : Recipes = new Recipes()

        await recipe.editRecipeById(data,req.params.id,name,makings,description)

        res.status(200).send("atualizado")

        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})


app.get('/searchRecipe',async (req,res)=>{
    try {

        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)
        if(!data){
            throw new Error("autorização inválida")
        }
        const recipe : Recipes = new Recipes()
        const search = req.query.name
        const allRecipes = await recipe.searchRecipes(search)
        console.log(search)
        

        res.status(200).send(allRecipes)
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }

})








