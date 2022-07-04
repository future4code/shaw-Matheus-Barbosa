import {Request,Response} from 'express'
import { Recipes } from '../Class/Recipes'
import { User } from '../Class/User'




export const deleteUserRecipe  = async(req:Request,res:Response) =>{
    try {

        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)
        
        const recipe : Recipes = new Recipes()

        await recipe.deleteRecipe(req.params.id)

        res.status(200).send("deletada com sucesso")
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}