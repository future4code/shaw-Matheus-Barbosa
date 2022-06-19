import { orderBy, selectAllUsers } from "./functions"
import { Response,Request } from "express"

export const getOrderBy = async(req: Request,res: Response): Promise<void> =>{
    try {
        const tipo : string = req.params.type
        const users = await orderBy(tipo)
 
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