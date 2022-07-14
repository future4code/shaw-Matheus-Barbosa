import { Request, Response } from "express";
import { createUser, generateId, generateToken, getData, getUserByEmail, getUserById } from "./functions";


export const signup = async (req : Request , res: Response) : Promise<any> =>{
    try {

        const {email,password} = req.body


        if (!req.body.email || req.body.email.indexOf('@') === -1){
            throw new Error('email incorreto')
        }
        if (!password || password.length < 6){
            throw new Error('senha incorreta')
        }

        const id = generateId()

        await createUser(id,email,password)


        const token = generateToken({id})

        res.send(token).status(200).end()


    } catch (error:any) {
        res.status(400).send(error.message)
    }
}

export const login = async (req: Request, res: Response) => {
    try {
      
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
  
      const user = await getUserByEmail(userData.email);
     
  
      if (user[0].pass !== userData.password) {
        throw new Error("Invalid password");
      }
  
      
      const token = generateToken({
        id: user.id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  };

export const profile = (req : Request , res : Response) => {
    try {

        // if (!req.headers.authorization){
        //     throw new Error('requer um token')
        // }

        console.log("oi")

        // const token = req.headers.authorization
        
        // const user = getData(token)

        // const result = await getUserById(user[0].id)

        res.status(200).send("oi")
        
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}