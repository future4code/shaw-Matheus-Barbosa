//entradas
export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
  }

  
  export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN"
  }
  
  export interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
  export interface Casino {
    name: string;
    location: LOCATION;
  }

  //saidas
  export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
  }
  
  export interface ResultItem {
    allowed: string[];
    unallowed: string[];
  }

  export function verifyAge(casino: Casino, users: User[]): Result {
    const americanResultItem : ResultItem= {
        allowed: [],
        unallowed : []
    }

    const brazilianResultItem : ResultItem= {
        allowed: [],
        unallowed : []
    }

    const brasilian = users.filter((user)=>{
        return user.nacionality === "BRAZILIAN"
    })

    const american = users.filter((user)=>{
        return user.nacionality === "BRAZILIAN"
    })


    let age : number

    if(casino.location === "BRAZIL"){
        age = 18
    }else{
        age = 21
    }


    
    users.map((user)=>{

            if (user.nacionality === "BRAZILIAN"){
                if(user.age >= age){
                    brazilianResultItem.allowed.push(user.name)
                }
                if(user.age < age){
                    brazilianResultItem.unallowed.push(user.name)
                }
            }
            if (user.nacionality === "AMERICAN"){
                if(user.age >= age){
                    americanResultItem.allowed.push(user.name)
                }
                if(user.age < age){
                    americanResultItem.unallowed.push(user.name)
                }
            }
        })
     

        const result : Result= {
            brazilians: brazilianResultItem,
            americans: americanResultItem
        }

        return result

  }