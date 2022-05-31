//A
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//B utilizaria o comando npm tsc exercicio-4.ts

// caso o arquivo estivesse na pasta src , eu poderia entrar na pasta para executar o comando, ou utilizar o script start, ja programado para converter todos os arquivos da pasta src para a pasta build

//C para transpilar mais de um arquivos devemos programar o script para transpilar todos os arquivos de uma pasta.

