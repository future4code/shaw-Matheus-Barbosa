import {Request,Response} from 'express'
import { Login } from '../Class/Login'
import { Recipes } from '../Class/Recipes'
import { User } from '../Class/User'




export const getRecipeById  = async(req:Request,res:Response) =>{
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

}