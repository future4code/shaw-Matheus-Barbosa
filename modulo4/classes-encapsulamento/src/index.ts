//1 
//A = serve para iniciarmos a instancia
//B = Aparece uma unica vez
//C = temos acesso às propriedades privadas através de métodos publicos
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    
    getCpf = () =>{
        return this.cpf
    }
    getName = () =>{
        return this.name
    }
    getAge = () =>{
        return this.age
    }    
    getBalance = () =>{
        return this.balance
    }
    getTrasactions =() =>{
        return this.transactions
    }
    postTransatiction =(transac : Transaction) : void =>{
        this.transactions = [...this.transactions,transac]
    }
  }

  const userOne : UserAccount = new UserAccount('13467766790','matheus lima', 31)

  class Transaction {
    private date: string
    private value: number
    private description: string
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

  const trasactionOne : Transaction = new Transaction('20-06-2022', 200,'deposito de 200')

  userOne.postTransatiction(trasactionOne)

  class Bank {
    private accounts: UserAccount[]
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    getAccounts = () =>{
        return this.accounts
    }
    postAccount = (newAccount: UserAccount):void =>{
        this.accounts= [...this.accounts,newAccount]
    }
  
  }