import {Request,Response} from 'express'
import { CreateRecipe } from '../Class/CreateRecipes'
import { Login } from '../Class/Login'
import { Recipes } from '../Class/Recipes'
import { User } from '../Class/User'




export const editRecipe  = async(req:Request,res:Response) =>{
    try {

        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)

        const verifyUser = await  user.getProfileById(data)

        if (verifyUser[0].id !== data ){
            throw new Error("Usuário não verificado")
        }        
        
        const {name,makings,description} = req.body
        const recipe : Recipes = new Recipes()

        await recipe.editRecipeById(data,req.params.id,name,makings,description)

        res.status(200).send("atualizado")

        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}