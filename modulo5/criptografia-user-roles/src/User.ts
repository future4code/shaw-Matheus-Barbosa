import {v4} from 'uuid'
import { BaseDatabase } from './BaseDataBase'
import * as jwt from 'jsonwebtoken'
import { GenHash } from './Hash'



export class User extends BaseDatabase{
    private id : string 
    private email : string 
    private password : string
    private token : string | undefined
    private role : string 

    constructor (email: string , password : string , role : string){
        super()
        this.id = v4()
        this.email = email
        
        this.password = password
        this.role = role
        this.createUser()
        this.generateToken(this.id, this.role)

    }

    private async createUser():Promise<void>{
        await this.connection.raw(`
            INSERT INTO exec_autent (id,email,pass) 
            VALUES ('${this.id}','${this.email}','${this.password}')
        `)
    }
    

    public  generateToken (id:string,role:string): void {
        const expires :string = "30min"
        const token = jwt.sign(
            {
                id,
                role
            },
            process.env.JWTKEY as string,
            {
               expiresIn : expires 
            }
        )
        this.token = token
    }
    public static generateToken (id:string,role : string): string {
        const expires :string = "30min"
        const token = jwt.sign(
            {
                id,
                role
            },
            process.env.JWTKEY as string,
            {
               expiresIn : expires 
            }
        )
        return token
    }

    getToken () : string | undefined {
        return this.token
    }
}