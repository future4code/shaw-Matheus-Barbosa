import {Request,Response} from 'express'
import { Recipes } from '../Class/Recipes'
import { User } from '../Class/User'
import { verifyUser } from '../Data/verifyUser'




export const createFollow  = async(req:Request,res:Response) =>{
    try {
       
        const idUser = await verifyUser(req.headers.authorization)
        const idFollow = req.params.id

        const user : User = new User()
        await user.followUser(idUser,idFollow)
        
        res.status(200).send("seguindo usuário")
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}