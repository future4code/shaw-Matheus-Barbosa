import { BaseDatabase } from "./BaseDataBase";
import * as jwt from 'jsonwebtoken'

type Authentication ={
    id : string
    role: string
}


export class Login extends BaseDatabase {


    constructor(){
        super()
    }

    async getUserByEmail(email:string):Promise<Object>{

        
        const result = await this.connection.raw(`
            SELECT * FROM exec_autent
            WHERE '${email}' = email
        `)

        return result[0]
    }


    public static verifyToken(token:string|undefined):Authentication{
        const payload = jwt.verify(token as string,process.env.JWTKEY as string) as any
        const result = {
            id:payload.id,
            role:payload.role
        }

        return result
    }
}

