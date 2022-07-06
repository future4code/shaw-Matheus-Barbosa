import createUserDTO from "../types/createUserDTO"
import BaseDataBase from "./BaseDataBase"

export default class UserData extends BaseDataBase {

    constructor(){
        super()
    }

    async getUserByEmail(email:string):Promise<any>{

        const result = await this.connection.raw(`
            SELECT * FROM User_Arq
            WHERE '${email}' = email
        `)

        return result[0]
    }

    async createUser (data:createUserDTO) : Promise<void>{
        await this.connection.raw(`
            INSERT INTO User_Arq (id,name,email,password,role)
            VALUES ('${data.id}','${data.name}','${data.email}','${data.password}','${data.role}')
        `)
    }

}