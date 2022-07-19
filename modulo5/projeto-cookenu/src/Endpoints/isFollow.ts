import {Request,Response} from 'express'
import { Recipes } from '../Class/Recipes'
import { User } from '../Class/User'
import { verifyUser } from '../Data/verifyUser'




export const isFollow  = async(req:Request,res:Response) =>{
    try {
       
        const idUser = await verifyUser(req.headers.authorization)

        const user : User = new User()

        const isFollow = await user.isfollow(idUser,req.params.id)
        console.log(isFollow)


        res.status(200).send(isFollow)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}