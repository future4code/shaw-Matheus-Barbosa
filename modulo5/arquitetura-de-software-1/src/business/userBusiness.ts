import UserData from "../data/userData";
import GenerateId from "../services/GenerateId";
import { HashPassword } from "../services/HashPassword";
import TokenManager from "../services/TokenManager";
import createUserDTO from "../types/createUserDTO";
import signupInputDTO from "../types/signupInputDTO";
import tokenInputDTO from "../types/tokenInputDTO";

export default class UserBusiness{

    constructor(
        private userData : UserData,
        private  generateId : GenerateId,
        private  hashing : HashPassword,
        private generateToken : TokenManager
    ){}
    

    async signup(auth:signupInputDTO) {

        const {name,email,password,role} = auth

        if(!name || !email || !password ||!role) {
            throw new Error("dados incompletos na requisição")
        }

        const userSearch = await this.userData.getUserByEmail(email)
        if(userSearch){
            throw new Error("Este usuário ja existe")
        }

        const id = this.generateId.generateId()


        const passwordHash = await  this.hashing.generateHash(password)

        const usuario : createUserDTO ={
            id,
            name,
            email,
            password,
            role
        }

        await this.userData.createUser(usuario)

        const tokenData : tokenInputDTO = {
            id,
            role
        }

        const token = this.generateToken.generateToken(tokenData)

        return token
    }
}