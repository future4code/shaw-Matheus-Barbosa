import { Casino, LOCATION, NACIONALITY, User, verifyAge } from "../src/exercicio3"


test("teste usuario brasileiro que pode entrar em um cassino no brasil", () => {


	const user : User = {
        name:"matheus",
        age:18,
        nacionality : NACIONALITY.BRAZILIAN
    }

    const arrayUser : Array<User> = [
        user
    ]

    const cassino : Casino = {
        name:"blabla",
        location: LOCATION.BRAZIL
    }

	const result = verifyAge(cassino,arrayUser)


	expect(result).toEqual(
        {
            "americans": {
                "allowed": [], 
                "unallowed": []
            },
            "brazilians": 
            {"allowed": ["matheus"], 
            "unallowed": []
        }
        }

    )
})


test("teste usuario americano que pode entrar em um cassino no brasil", () => {


	const user : User = {
        name:"Richard",
        age:18,
        nacionality : NACIONALITY.AMERICAN
    }

    const arrayUser : Array<User> = [
        user
    ]

    const cassino : Casino = {
        name:"blabla",
        location: LOCATION.BRAZIL
    }

	const result = verifyAge(cassino,arrayUser)


	expect(result).toEqual(
        {
            "americans": {
                "allowed": ["Richard"], 
                "unallowed": []
            },
            "brazilians": 
            {"allowed": [], 
            "unallowed": []
        }
        }

    )
})


test("teste opção c", () => {


	const user1 : User = {
        name:"Richard",
        age:19,
        nacionality : NACIONALITY.AMERICAN
    }
    const user2 : User = {
        name:"ana",
        age:19,
        nacionality : NACIONALITY.AMERICAN
    }
    const user3 : User = {
        name:"joao",
        age:19,
        nacionality : NACIONALITY.BRAZILIAN
    }
    const user4 : User = {
        name:"Ellen",
        age:19,
        nacionality : NACIONALITY.BRAZILIAN
    }

    const arrayUser : Array<User> = [
        user1,
        user2,
        user3,
        user4
    ]

    const cassino : Casino = {
        name:"blabla",
        location: LOCATION.EUA
    }

	const result = verifyAge(cassino,arrayUser)


	expect(result).toEqual(
        {
            "americans": {
                "allowed": [], 
                "unallowed": ["Richard","ana"]
            },
            "brazilians": 
            {"allowed": [], 
            "unallowed": ["joao","Ellen"]
        }
        }

    )
})

test("teste opção d", () => {


	const user1 : User = {
        name:"Richard",
        age:21,
        nacionality : NACIONALITY.AMERICAN
    }
    const user2 : User = {
        name:"ana",
        age:21,
        nacionality : NACIONALITY.AMERICAN
    }
    const user3 : User = {
        name:"joao",
        age:19,
        nacionality : NACIONALITY.BRAZILIAN
    }
    const user4 : User = {
        name:"Ellen",
        age:19,
        nacionality : NACIONALITY.BRAZILIAN
    }

    const arrayUser : Array<User> = [
        user1,
        user2,
        user3,
        user4
    ]

    const cassino : Casino = {
        name:"blabla",
        location: LOCATION.EUA
    }

	const result = verifyAge(cassino,arrayUser)


	expect(result).toEqual(
        {
            "americans": {
                "allowed": ["Richard","ana"], 
                "unallowed": []
            },
            "brazilians": 
            {"allowed": [], 
            "unallowed": ["joao","Ellen"]
        }
        }

    )
})
