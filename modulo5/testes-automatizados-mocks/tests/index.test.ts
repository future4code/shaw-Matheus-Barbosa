import { Character, performAttack, validateCharacter } from "../src/controller"


describe("testing the validate character",()=>{
    test("if character name null",()=>{
        const charater : Character ={
            name: "",
            life: 1500,
            strength: 100,
            defense: 40
        }

        const result = validateCharacter(charater)
        
        expect(result).toBe(false)
        
    })

    test("if life = 0",()=>{
        const charater : Character ={
            name: "doug",
            life: 0,
            strength: 100,
            defense: 40
        }

        const result = validateCharacter(charater)
        
        expect(result).toBe(false)
        
    })

    test("if strength = 0",()=>{
        const charater : Character ={
            name: "pingo",
            life: 1500,
            strength: 0,
            defense: 40
        }

        const result = validateCharacter(charater)
        
        expect(result).toBe(false)
        
    })
    test("if defense = 0",()=>{
        const charater : Character ={
            name: "pingo",
            life: 1500,
            strength: 100,
            defense: 0
        }

        const result = validateCharacter(charater)
        
        expect(result).toBe(false)
        
    })
    test("if negative life,strength and defense",()=>{
        const charater : Character ={
            name: "bola",
            life: -1500,
            strength: -100,
            defense: -40
        }

        const result = validateCharacter(charater)
        
        expect(result).toBe(false)
        
    })
    test("if character are correct",()=>{
        const charater : Character ={
            name: "gugu",
            life: 1500,
            strength: 100,
            defense: 40
        }

        const result = validateCharacter(charater)
        
        expect(result).toBe(true)
        
    })
})

describe("testing the validate character",()=>{
    

   
    test("simulate attack with defense < attack",()=>{
       
        const validateMockTrue  = jest.fn(()=>{
            return true
        })

        const gaga : Character ={
            name: "gaga",
            life: 1500,
            strength: 400,
            defense: 40
        }
        const gege : Character ={
            name: "gugu",
            life: 1500,
            strength: 200,
            defense: 200
        }

        const result = performAttack(gaga,gege,validateMockTrue)

        expect(result).toEqual({
            name: "gugu",
            life: 1300,
            strength: 200,
            defense: 200
        })
        expect(validateMockTrue).toHaveBeenCalled()
        expect(validateMockTrue).toHaveBeenCalledTimes(2)
        expect(validateMockTrue).toHaveReturnedTimes(2)
       
    })

    test("simulate invalid character",()=>{
       
        const validateMockTrue  = jest.fn(()=>{
            return true
        })

        const gaga : Character ={
            name: "",
            life: 1500,
            strength: 400,
            defense: 40
        }
        const gege : Character ={
            name: "gugu",
            life: 1500,
            strength: 200,
            defense: 200
        }

        try {
            performAttack(gaga,gege,validateMockTrue)
        } catch (error:any) {
            expect(error.message).toBe("invalid character")
            expect(validateMockTrue).toHaveBeenCalled()
            expect(validateMockTrue).toHaveBeenCalledTimes(1)
            expect(validateMockTrue).toHaveReturnedTimes(1)
        } 
       
    })
    
    

})