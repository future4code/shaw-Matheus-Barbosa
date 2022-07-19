import { User } from "./User";


export class Login extends User{

    private cpf : string
    private password : string


    constructor (cpf : string , password : string){
        super()
        this.cpf = cpf
        this.password = password
    }

    async verifyLogin (){
        const result = await this.getUserByCpf(this.cpf)
        const compare = await this.compareHash(this.password,result[0].password)

        console.log(compare)

        let token 
        if (compare){
            token = this.generateToken(result[0].id) 
        }
        
        return token

    }
}