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
            DELETE * FROM Users_cookenu
            WHERE id = '${id}'
        `)
    }

    protected async followUser (idFollower : string , idFollow : string) : Promise<void>{
        const verify = this.isfollow(idFollower,idFollow)
        if (!verify){
        await this.connection.raw(`
            INSERT INTO Follows_cookenu (idFollower,idFollow)
            VALUES ('${idFollower}','${idFollow}')
        `)
        }
    }

    async getFollows (id:string) : Promise<any>{
        const result = await this.connection.raw(`
            SELECT * FROM Follows_cookenu
            WHERE idFollower = '${id}'
        `)
    }

    protected async unfollow (idFollower : string , idFollow : string) : Promise<void>{
        const verify = this.isfollow(idFollower,idFollow)
        if(!verify){
        await this.connection.raw(`
            DELETE * FROM Follows_cookenu
            WHERE idFollower = '${idFollower}' AND idFollow = '${idFollow}'
        `)
        }
    }

    async isfollow (idFollower : string , idFollow : string) : Promise<boolean>{

        const result = await this.connection.raw(`
            SELECT * FROM Follows_cookenu
            WHERE idFollower = '${idFollower}' AND idFollow = '${idFollow}'
        `)

        if (result === {}){
            return false
        }else{
            return true
        }
    }




}