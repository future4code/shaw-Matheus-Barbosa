import * as jwt from 'jsonwebtoken'
import tokenInputDTO from '../types/tokenInputDTO'

export default class TokenManager{

    generateToken (data : tokenInputDTO): string {
        const expires : string = '1d'
        const token = jwt.sign(
            data,
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