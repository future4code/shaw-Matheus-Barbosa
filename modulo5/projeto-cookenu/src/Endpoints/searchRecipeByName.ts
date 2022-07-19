import {Request,Response} from 'express'
import { Recipes } from '../Class/Recipes'
import { User } from '../Class/User'




export const searchRecipeByName = async(req:Request,res:Response) =>{
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

}