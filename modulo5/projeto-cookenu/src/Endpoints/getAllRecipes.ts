import {Request,Response} from 'express'
import { Login } from '../Class/Login'
import { Recipes } from '../Class/Recipes'
import { User } from '../Class/User'




export const getAllRecipes  = async(req:Request,res:Response) =>{
    try {

        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)
        
        const recipe : Recipes = new Recipes()

        const allRecipes = await recipe.getRecipes()

        res.status(200).send(allRecipes)
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}