import { Request, Response } from "express";
import UserBusiness from "../business/userBusiness";
import signupInputDTO from "../types/signupInputDTO";



export default class UserController{
    // o construtor instancia as classes necessárias para esta classe
    constructor (
        private userBusiness : UserBusiness
    ){}

    async signup (req:Request,res:Response){
         // pega os dados da requisição
         const {name,email,password,role} = req.body
         // cria um objeto do tipo 
         const body : signupInputDTO ={
             name,
             email,
             password,
             role
         }
       
        try {

          
            // chama a função do userBusiness que ja foi instanciado no construtor
            const token = await this.userBusiness.signup(body)

            res.status(200).send(token)

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }


}