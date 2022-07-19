import {Request,Response} from 'express'
import { CreateRecipe } from '../Class/CreateRecipes'
import { Login } from '../Class/Login'
import { User } from '../Class/User'




export const createRecipe  = async(req:Request,res:Response) =>{
    try {
        const user : User = new User ()
        const auth = req.headers.authorization 
        let data = undefined
        data = user.verifyToken(auth)
        
        const {name,makings,description} = req.body

        const newRecipe : CreateRecipe = new CreateRecipe(data,name,makings,description)

        res.status(200).send("receita enviada")

        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}