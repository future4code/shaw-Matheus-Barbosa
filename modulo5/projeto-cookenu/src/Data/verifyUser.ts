import { User } from "../Class/User"




export const verifyUser = async (auth:any):Promise<any> =>{
    const user : User = new User () 
    let data = undefined
    data = user.verifyToken(auth)

    const verifyUser = await  user.getProfileById(data)

    if (verifyUser[0].id !== data ){
        throw new Error("Usuário não verificado")
    } else{
        return data
    }
    
    
}