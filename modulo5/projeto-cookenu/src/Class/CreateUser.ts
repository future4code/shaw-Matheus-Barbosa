import { v4 } from "uuid";
import { User } from "./User";




export class CreateUser extends User{
    private id : string
    private cpf: string
    private name : string
    private email : string 
    private password : string
    private role : string 
    private token : string

    constructor  ( cpf:string, name:string,email:string, password:string,role:string){
        super()
        this.id = v4()
        this. name = name
        this.cpf = cpf
        this.email = email
        this.password = password
        this.role = role
        this.token = this.generateToken(this.id)
    }
    
    async createUser () : Promise<void>{
        await this.connection.raw(`
            INSERT INTO Users_cookenu (id,cpf,name,email,password,role)
            VALUES ('${this.id}','${this.cpf}','${this.name}','${this.email}','${this.password}','${this.role}')
        `)
    }

    async getProfile (): Promise<any>{
        const result = this.getProfileById(this.id)
        
        return result
    }

    getToken (){
        return this.token
    }



}