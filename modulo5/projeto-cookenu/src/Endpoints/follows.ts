import {Request,Response} from 'express'
import { CreateRecipe } from '../Class/CreateRecipes'
import { Login } from '../Class/Login'
import { User } from '../Class/User'
import { verifyUser } from '../Data/verifyUser'




export const follows  = async(req:Request,res:Response) =>{
    try {
       
        const idUser = await verifyUser(req.headers.authorization)

        const user : User = new User()

        const userFollowed = await user.getFollows(idUser)
        
        res.status(200).send(userFollowed)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}