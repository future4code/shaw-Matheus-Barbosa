const usuarios =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 


function retornaEmailsAdmin (users : object[]){

    const filtro = users.filter((elemento:any)=>{
        return elemento.role === "admin"
    }).map((elemento:any)=>{
        return elemento.email
    })

    return filtro
}

console.log(retornaEmailsAdmin(usuarios))