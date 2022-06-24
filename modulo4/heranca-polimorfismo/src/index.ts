// Exercicios de Herança
// Exercicio 1

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      public introduceYourself () : string{
        return (`Olá eu sou o ${this.name}`)
      }
  }

  const usuario : User = new User('aaa','email','nome','sssss')
  console.log(usuario.getEmail())
  console.log(usuario.getId())
  console.log(usuario.getName())

  // não é possível pois é privado e nao possui um metodo publico
  // aparece uma vez

  //Exercicio2
  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const novoCustomer : Customer = new Customer('qwqw', 'joao@','joao','qqq','12345')

// aparece uma vez
// aparece uma vez pois a classe custumer é filha da classe user

//Exercicio 3

console.log(novoCustomer.getCreditCard())
console.log(novoCustomer.getEmail())
console.log(novoCustomer.getId())
console.log(novoCustomer.getName())
console.log(novoCustomer.purchaseTotal)

// não é possivel imprimir password pois nao existe um método publico para tal

//Exercicio 4/5

console.log(novoCustomer.introduceYourself())


//Exercicios de polimorfismo

//1


export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }


  

  const cliente: Client = {
    name: "Matheus",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

  console.log(cliente.calculateBill())
  console.log(cliente.name)
  console.log(cliente.registrationNumber)
  console.log(cliente.consumedEnergy)

  // imprimiu todas as propriedades, elas sao publicas

  //2

  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

  //const teste : Place = new Place('wwwwww')

  // informa não ser possível criar uma instancia de uma classe abstrata

  // chama-la dentro de um objeto de uma outra classe 

  //3

  export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    getResidentsQuatity = ():number =>{
        return this.residentsQuantity
    }
  }

  const user1 : Residence = new Residence(12,'2223344')

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }

    getFloorsQuantity = ():number =>{
        return this.floorsQuantity
    }
  }

  const user2 : Commerce = new Commerce(12,'2223344')

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }

    getMachinesQuantity = ():number =>{
        return this.machinesQuantity
    }
  }

  const user3 : Industry = new Industry(12,'2223344')


  

