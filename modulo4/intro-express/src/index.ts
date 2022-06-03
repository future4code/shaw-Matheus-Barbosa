import  Express  from "express";
import cors from 'cors'

//  para facilitar a busca nos posts é mais facil coloca-los em um array dentro do objeto do usuario, porem para  renderizar todos os posts na tela, acho mais pratico ter um array so para os posts. acho q da para salvar nos 2 lugares também, dependendo do objetivo da aplicação


const app = Express()

app.use(Express.json())
app.use(cors())

app.listen(3003,()=>{
    console.log("server is running")
})

app.get('/', (req  , res )=>{
    res.send('hello world')
})
app.get('/users',(req,res)=>{
    res.send(arrayUsers)
})
app.get('/posts',(req,res)=>{
    res.send(arrayPosts)
})

app.get('/posts/:id',(req,res)=>{

    let filterArray : object[] = arrayPosts.filter((elemento : any)=>{
        return elemento.userId == req.params.id
    })

    res.send(filterArray)

})

type user = {
    id: string,
    name:string,
    phone:string,
    email:string,
    site:string
}

type post = {
    id:string,
    title:string,
    body:string,
    userId:string
}

let arrayUsers : object[] = []
let arrayPosts : object[] = []

function addUser (id : string, name : string , phone : string , email : string , site:string) : void{
    const newUser : user ={
        id :  id, 
        name : name,
        phone : phone,
        email:email,
        site:site
    }

    arrayUsers = [...arrayUsers,newUser]
}

function addPost (id : string , title : string , body : string , userId : string):void{
    const newPost : post ={
        id: id ,
        title : title,
        body : body,
        userId : userId
    }

    arrayPosts = [...arrayPosts,newPost]
}

addUser("1","matheus","33562171","matheus@matheus","www.matheus")
addUser("2","ana","33562171","ana@luiza","www.analuiza")

addPost('111', 'mecanica','vamos aprender mecanica','1')
addPost('122','instagram','vamos fazer fofoca','2')

