import { v4 } from "uuid";
import connection from "./connection";
import * as jwt from 'jsonwebtoken'



export const generateId = () : string =>{
    return v4()
}

export  const createUser = async (id : string , email : string , pass : string) : Promise<void> =>{
     await connection.raw(`
        INSERT INTO exec_autent (id,email,pass) VALUES ('${id}','${email}','${pass}')
     `)
}

type idToken = {
    id: string
}

export const generateToken = (id:idToken) : string =>{
    const token = jwt.sign(id,process.env.JWTKEY as string,{expiresIn: "50m"})

    return token
}

export const getUserByEmail = async(email:string) : Promise<any> =>{

    try {

        const user = await connection.raw(`
        SELECT * FROM exec_autent
        WHERE email = '${email}'
    `)

    return user[0]
        
    } catch (error) {
        
    }
    
}

export const getData = (token:string): any=>{

    const payload = jwt.verify(token,process.env.JWTKEY as string) as any
    const result = payload.id
    return result

}

export const getUserById = async(id:string) : Promise<any> =>{

    try {

        const user = await connection.raw(`
        SELECT * FROM exec_autent
        WHERE id = '${id}'
    `)

    return user[0]
        
    } catch (error) {
        
    }
    
}