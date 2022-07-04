import {Request,Response} from 'express'
import { Login } from '../Class/Login'




export const login  = async(req:Request,res:Response) =>{
    try {


        const {cpf,password} = req.body

        if(!cpf || !password){
            throw new Error("Dados incompletos")
            
        }

        const login : Login = new Login(cpf,password)
        const token = await login.verifyLogin()
        
        res.send(token).status(200)
        
    } catch (error:any) {
        res.send(error.message).status(400)
    }
}