export interface Character {
    name : string, 
    life : number,
    strength : number,
    defense:number
}

export function validateCharacter (input:Character):boolean{
    if(!input.name || input.life === undefined || input.strength === undefined || input.defense === undefined){
        return false
    }

    if (input.life <= 0 || input.strength <= 0 || input.defense<= 0){
        return false
    }

    return true

}

export function performAttack (attacker : Character , defender : Character , validator : (input:Character)=>boolean) {
    const isValidAttacker = validator(attacker)
    const isValiddefender = validator(defender)

    if (!isValidAttacker || !isValiddefender){
        throw new Error("invalid character")
    }

    if (attacker.strength > defender.defense){
        const newlife =  defender.life - (attacker.strength - defender.defense)
        defender.life = newlife
    }
    
    return defender

}

