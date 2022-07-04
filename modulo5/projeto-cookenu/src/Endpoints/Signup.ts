import {Request,Response} from 'express'
import { CreateUser } from '../Class/CreateUser'
import { TokenAndHash } from '../Class/TokenAndHash'



export const signup  = async(req:Request,res:Response) =>{

    try {

        
        const {cpf,name,email,password,role} = req.body

        if(!cpf||!name||!email||!password||!role){
            throw new Error("Requisição incompleta")
        }
        if (!req.body.email || email.indexOf("@") === -1){
            throw new Error("Email Inválido")
        }

        const pass : TokenAndHash = new TokenAndHash()
        const hashPassword = await pass.generateHash(password)
        const user : CreateUser = new CreateUser(cpf,name,email,hashPassword,role)


        
        await user.createUser()
        const token = user.getToken()
        res.status(200).send(token)

        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}