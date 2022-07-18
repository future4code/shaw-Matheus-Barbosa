 export interface User {
    name : string,
    balance : number
 }

export const userShopping =  (user:User , value : number): User | undefined=>{

    if (user.balance >= value){
        const newBalance : User ={
            name : user.name,
            balance: user.balance - value
        }

        return newBalance

    }else{
        return undefined
    }
}

