import {Request,Response} from 'express'
import { User } from '../Class/User'



export const getProfileByToken  = async(req:Request,res:Response) =>{
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
}