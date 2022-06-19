import { selectAllUsers, selectUser } from "./functions"
import { Response,Request } from "express"

export const getUser = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name : any = req.query.name
       const users = await selectUser(name)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }