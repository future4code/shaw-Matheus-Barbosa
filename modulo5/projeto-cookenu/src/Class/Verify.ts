import { BaseDatabase } from "./BaseDataBase";
import * as jwt from 'jsonwebtoken'
import { User } from "./User";

type Authentication ={
    id : string
    role: string
}


export class Verify extends User {

    private token : string

    constructor(token:string){
        super()
        this.token = token
    }

    async getUserByToken() : Promise<any>{
        const verify = this.verifyToken(this.token)
        // const result = await this.getProfileById(verify.id)
        return verify
    }

}

