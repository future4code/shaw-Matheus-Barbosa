import {v4} from 'uuid'
import { BaseDatabase } from './BaseDataBase'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { TokenAndHash } from './TokenAndHash'




export class User extends TokenAndHash{

    

   constructor(){
    super()
   }

    
    async getUsers () : Promise<any> {
        const result = await this.connection.raw(`
            SELECT * FROM Users_cookenu
        `)

        return result[0]
    }
    async getUserByCpf(cpf:string):Promise<any>{


        const result = await this.connection.raw(`
            SELECT * FROM Users_cookenu
            WHERE '${cpf}' = cpf
        `)

        return result[0]
    }

    async getProfileById (id:string ) : Promise<any> {
        const result = await this.connection.raw(`
            SELECT * FROM Users_cookenu 
            WHERE id = '${id}'
        `)

        return result[0]
    }

    async filterUsers (search : string) : Promise<any> {
        const result = await this.connection.raw(`
            SELECT * FROM Users_cookenu
            WHERE name LIKE '%${search}%'
        `)

        return result
    }

    protected async deleteUser (id:string) : Promise<void>{
        await this.connection.raw(`
            DELETE FROM Users_cookenu
            WHERE id = '${id}'
        `)
    }

    async getUserbytoken(token:any): Promise<any>{
        let data = undefined
        data = this.verifyToken(token)
        return data
    }

    async followUser (idFollower : string , iFollow : any) : Promise<void>{
       
        await this.connection.raw(`
            INSERT INTO Follows_cookenu (idFollower,idFollow)
        
            VALUES ('${idFollower}','${iFollow}')
        `)
        
    }

    async getFollows (id:string) : Promise<any>{
        
        const result = await this.connection.raw(`
            SELECT * FROM Follows_cookenu
            WHERE idFollower = '${id}'
        `)

        return result[0]
    }

    async unfollow (idFollower : string , iFollow : any) : Promise<void>{

        await this.connection.raw(`
        DELETE FROM Follows_cookenu
        WHERE idFollower = '${idFollower}' AND idFollow = '${iFollow}';
        `)
        
    }

    async isfollow (idFollower : string , idFollow : any) : Promise<any>{

        const result  = await this.connection.raw(`
            SELECT idFollow FROM Follows_cookenu
            WHERE idFollower = '${idFollower}' AND idFollow = '${idFollow}'
        `)
        return result[0]
        
    }


 


}