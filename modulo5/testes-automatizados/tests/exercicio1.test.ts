import { User, userShopping } from "../src/exercicio1"


test("Testing balance greater than value", () => {
	const user: User = {
		name: "matheus",
		balance: 200
	}

	const result = userShopping(user, 30)
	
	expect(result).toEqual({
		name: "matheus",
		balance: 170
	})
})

test("Testing balance equal to the value", () => {
	const user: User = {
		name: "matheus",
		balance: 200
	}

	const result = userShopping(user, 200)
	
	expect(result).toEqual({
		name: "matheus",
		balance: 0
	})
})

test("Testing balance less than the value", () => {
	const user: User = {
		name: "matheus",
		balance: 200
	}

	const result = userShopping(user, 250)
	
	expect(result).toEqual(undefined)
})



