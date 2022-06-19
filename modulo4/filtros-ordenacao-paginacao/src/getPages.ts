import { selectAllUsers } from "./functions"
import { Response,Request } from "express"
import { getPages } from "./functions"

export const getPage = async(req: Request,res: Response): Promise<void> =>{
    try {
        const page : any= Number(req.query.number)

       const users = await getPages(page)
 
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