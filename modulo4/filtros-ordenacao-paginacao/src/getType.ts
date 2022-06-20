import { selectAllUsers, selectUser, selectUserType } from "./functions"
import { Response,Request } from "express"

export const getType = async(req: Request,res: Response): Promise<void> =>{
    try {
        const type : any = req.params.type
       const users = await selectUserType(type)
 
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