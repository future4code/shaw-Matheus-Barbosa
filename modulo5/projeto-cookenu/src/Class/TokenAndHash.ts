import * as bcrypt from 'bcryptjs'
import { BaseDatabase } from './BaseDataBase'
import * as jwt from 'jsonwebtoken'



export class TokenAndHash extends BaseDatabase{

    public  async generateHash(senha:string): Promise<string> {
        const rounds : number = 12
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(senha,salt)
        return result
    } 

    public async compareHash(senha:string , hash : string)  : Promise<boolean> {
        return bcrypt.compare(senha,hash)
    }

    generateToken (id:string): string {
        const expires : string = '1d'
        const token = jwt.sign(
            {
                id : id
            } ,
            process.env.JWTKEY as string,
            {
               expiresIn : expires,
            }
        )
            
        return token
    }
   
    public  verifyToken(token: any):string{
        const payload = jwt.verify(token as string,process.env.JWTKEY as string) as any

        return payload.id
    }

   
}